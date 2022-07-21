const { Dish } = require("../../models");

const renderDishPage = async (req, res) => {
  try {
    const { id } = req.params;

    const dishFromDB = await Dish.findByPk(id);

    if (!dishFromDB) {
      return res.render("no-dish", { id });
    }

    const dish = dishFromDB.serialize();

    return res.render("dish", dish);
  } catch (error) {
    console.log(`[ERROR]: Failed to get dish | ${error.message}`);
    return res.render("error");
  }
};
const renderDishesPage = async (req, res) => {
  try {
    const dishFromDB = await Dish.findAll();

    const dishes = dishFromDB.map((dish) => dish.serialize());

    return res.render("dishes", {dishes});
  } catch (error) {
    console.log(`[ERROR]: Failed to get dishes | ${error.message}`);
    return res.render("error");
  }
};

module.exports = {
  renderDishPage,
  renderDishesPage,
};
