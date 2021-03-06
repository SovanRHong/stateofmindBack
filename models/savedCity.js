'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class savedCity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    };
    savedCity.init({
        userId: DataTypes.INTEGER,
        cityId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'savedCity',
    });
    return savedCity;
};