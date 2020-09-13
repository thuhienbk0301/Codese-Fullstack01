const accountService = require("../services/account");

const getAllAccount = async (req, res) => {
  console.log(req.query);
  const { data, metadata } = await accountService.getAll(req.pagination);
  res.send({
    status: 1,
    data,
    metadata,
  });
};
const getAccountById = async (req, res) => {
  const { id } = req.params;
  const { data } = await accountService.getById(id);
  res.send({
    status: 1,
    data,
});

const create = (newAccount) => {
  console.log("tao moi tk", newAccount);
  if (!newAccount.username || newAccount.password.length < 6) {
  const result = {
    status: 1,
    message: "Mat khau phai co do dai hon 6 ky tu",
  };
  return result;
}
  return accountService.create(newAccount);
};

const updateAccount = async (req, res) => {
  const { id } = req.params;
  await accountService.updateById(id, req.body);
  res.send({
  status: 1, // true - 1, false 0
  });
};

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  await accountService.deleteById(id);
  res.send({
  status: 1, // true - 1, false 0
  });
};

module.exports = {
    getAllAccount,
    getAccountById,
    create,
    updateAccount,
    deleteAccount,
  };
};
