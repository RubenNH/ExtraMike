const validateError = (error) =>{
    switch(error.massage){
        case 'Wrong type':
            return 'review request fields';
            break;
        case 'Missing fields':
            return 'validate fields';
            break;
        case 'Inexistent role':
            return 'role not registered';
            break;
        case 'Nothing found':
            return 'No data found';
            break;
        case 'Password mismatch':
            return 'Credencials mismatch';
            break;
        case 'User desabled':
            return 'User disabled';
            break;
        default:
            return 'review request';
            break;
    }
};

module.exports ={
    validateError
}