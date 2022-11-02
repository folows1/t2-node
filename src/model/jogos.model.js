module.exports = (sequelize, DataTypes) => {
    const Jogos = sequelize.define('jogos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mandante: DataTypes.STRING,
        visitante: DataTypes.STRING,
        gols_mandante: DataTypes.INTEGER,
        gols_visitante: DataTypes.INTEGER,
        data: DataTypes.DATE,
        horario: DataTypes.STRING,
        estadio: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return Jogos;
}