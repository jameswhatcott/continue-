const User = require('./User')
const Game = require('./Game')
const GameInfo = require('./GameInfo')

GameInfo.belongsTo(Game, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
})

Game.hasMany(GameInfo, {
    foreignKey: 'game_id'
})

User.hasMany(Game, {
    foreignKey: 'user_id'
})



module.exports = {User, Game, GameInfo}









// CREATE TABLE game (
//       game_id INTEGER NOT NULL,
//    title VARCHAR(30) NOT NULL
//      publisher TEXT NOT NULL,
//       player_perspective VARCHAR(20) NOT NULL,
//       year_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
//        genre VARCHAR(30)
//      );
    
//      CREATE TABLE game_info (
//        game_id INTEGER PRIMARY KEY  
//       developer VARCHAR(30) NOT NULL,
//       engine VARCHAR(30) NOT NULL
//        amount_players INTEGER NOT NULL,
//      );
    
//      CREATE TABLE product (
//          productID INTEGER PRIMARY KEY 
//          condition VARCHAR(30) NOT NULL,
//         price DECIMAL(10, 2) NOT NULL,
//          Stock INT DEFAULT 10,
//          currency 
//      )