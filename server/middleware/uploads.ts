import multer from 'multer/index.ts'

const uploads = multer({ dest: 'temp/missions/imports/' })

export default uploads
