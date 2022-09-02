let users = [
    {
        id: 1,
        gender: 'female',
        name: 'Shakiba',
        contact: '01613387332',
        address: 'Dhaka',
        photoUrl: 'https://www.facebook.com/shakiba.alam.779'
    },
    {
        id: 2,
        gender: 'male',
        name: 'Sakib',
        contact: '01613387332',
        address: 'Dhaka',
        photoUrl: 'https://www.facebook.com/shakiba.alam.779'
    },
    {
        id: 3,
        gender: 'female',
        name: 'Mira',
        contact: '01613387332',
        address: 'Dhaka',
        photoUrl: 'https://www.facebook.com/shakiba.alam.779'
    },
]

module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query
    res.json(users.slice(0, limit))
}

module.exports.postAUser = (req, res) => {
    // console.log(req.body);
    users.push(req.body)
    res.send(users)
}

module.exports.getAUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(u => u.id === Number(id))
    res.send(foundUser)
}

module.exports.updateAUser = (req, res) => {
    const { id } = req.params;
    let newData = users.find(u => u.id === Number(id))
    newData = {
        id: req.body.id || id,
        gender: req.body.gender || newData.gender,
        name: req.body.name || newData.name,
        contact: req.body.contact || newData.contact,
        address: req.body.address || newData.address,
        photoUrl: req.body.photoUrl || newData.photoUrl
    }
    res.send(newData)
}

module.exports.deleteAUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(u => u.id !== Number(id))
    res.send(users)
}