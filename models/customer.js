module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        text: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                len: [1, 144]
            }
        },
        devoured: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 144]
            }
        }
    });
    return Customer;
};