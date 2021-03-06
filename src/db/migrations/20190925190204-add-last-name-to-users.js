'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Users',
            'last_name',
            Sequelize.STRING
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("Users", "last_name");
    }
};