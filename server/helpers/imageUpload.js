const multer = require('multer');
const path = require('path');

// Set the Storage Engine
const storage = multer.diskStorage({
    destination: (req,file, callback) => {
        callback(null, './public/uploads/' + req.user.id + '/');
    },
    filename: (req, file, callback) => {
        callback(null, req.user.id + '-' + Date.now()+ path.extname(file.originalname));
    }
});

// Initialise Upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, callback) => {
        checkFileType(file, callback);
    }
}).single('profilePicUpload'); // Must be the name as the HTML file upload input

// Check File Type
function checkFileType(file,callback){
    // Allowed file extensions
    const filetypes = /jpeg|jpg|png|gif/;
    
    // Test Extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    // Test mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return callback(null,true);
    }else {
        callback({message:'image Only'});
    }
}

module.exports = upload;