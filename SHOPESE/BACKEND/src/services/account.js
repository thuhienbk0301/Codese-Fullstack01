
const db = require('../utils/db')
const security = require('../utils/security')

const create = async (newAccount) =>{
    const checkExistedSQL = `
    SELECT count(username) as c FROM account WHERE username=?;`;
    const exist = await db.queryOne(checkExistedSQL, [newAccount.username]);
    if (exist.c > 0){
        return('tai khoan da ton tai');
    }else{
        const encryptedPassword = await security.generatePassword(newAccount.password);
        console.log (encryptedPassword);
        const insertSQL = `
        INSERT INTO account (username, password) VALUES (?,?);`;
        await db.query(insertSQL,[
            newAccount.username,
            encryptedPassword
        ]
        );
        return "tao tk thanh cong!";
    }


}

module.exports = {
    create
}