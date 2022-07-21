const { Dish} = require('../../models');

const renderDishPage = (req, res) => {

    const { id } = req.params;

    const dishFromDB = Dish.findByPk(id);

    if (!dishFromDB) {
        return res.render("no-dish")
    }
    return res.render("")
};
const renderDishesPage = (req, res) => {
    return res.render("")
};

module.exports = {
  renderDishPage,
  renderDishesPage,
};
