'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: { msg: "must be a valid email" }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Song, {
            foreignKey: "userId",
            as: "songs",
        })
    };
    // User.addScope("songs", (userId) => {
    //     console.log("In user model scope")
    //     return {
    //         include: [{
    //             model: models.Song,
    //             where: { userId: userId }
    //         }],
    //     }
    // });
    return User;
};