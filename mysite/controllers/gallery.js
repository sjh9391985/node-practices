const fs = require('fs');
const path = require('path');
const { gzip } = require('zlib');
const models = require('../models');

module.exports = {
    /* 갤러리 화면 */
    index: async function(req, res, next) {
        try { 
            const results = await models.Gallery.findAll({
                attributes: ['no', 'url', 'comment'],
                order: [
                    ['no', 'desc']
                ]
            })
            res.render('gallery/list', {
                galleries: results
            });
        } catch(err) {
            next(err);
        }         
    },
    /* 갤러리 화면 END */
    
    /* 갤러리 사진 업로드 */
    upload: async function(req, res, next){
        try {
            const file = req.file;
            const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.GALLERY_STORE_LOCATION);
            const url = path.join(process.env.GALLERY_STORE_LOCATION, file.filename) + path.extname(file.originalname);
            const storePath = path.join(storeDirectory, file.filename) + path.extname(file.originalname)

            fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
            const content = fs.readFileSync(file.path);
            fs.writeFileSync(storePath, content, {flag: 'w+'});
            
            await models.Gallery.create({
                url: url.replace(/\\/gi, '/'),
                comment: req.body.comment || ''
            });

            res.redirect('/gallery');
        } catch(err) {
            next(err);
        }         
    },
    /* 갤러리 사진 업로드 END */

    /* 갤러리 사진 삭제 */
    delete: async function(req, res, next){
        try{
            const result = await models.Gallery.destroy({
                where: {
                    no: req.params.no
                }
            })

            res.redirect('/gallery');
        }catch(e){
            next(e)
        }
    }
    /* 갤러리 사진 삭제 END */    
}