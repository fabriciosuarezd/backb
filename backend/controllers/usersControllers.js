const login = (req, res) => {
    res.status(200).json({message: 'login'})
}

const register = (req, res) => {
    res.status(200).json({message: 'register'})
}

const data = (req, res) => {
    res.status(200).json({message: 'data'})
}

module.exports = {
    login, register,data
}