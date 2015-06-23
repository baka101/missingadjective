var Collisions = {};

Collisions.collisionDetection = function(player, collisionObject) {
  //return bool
  var distanceToFlagX = Math.pow(player.position.x - collisionObject.position.x, 2);
  var distanceToFlagY = Math.pow(player.position.y - collisionObject.position.y, 2);
  var distanceToFlag = Math.sqrt(distanceToFlagX + distanceToFlagY);

  if (distanceToFlag <= player.radius + collisionObject.radius) {
    console.log('collided!');
    return true;
  }
  else return false;
}

Collisions.flagDetection = function(player, flag){
  if (!flag.dropped){
    if (this.collisionDetection(player, flag)){
      flag.capturedByPlayer(player);
    }
  }
};

Collisions.playerDetection = function(player, otherPlayer){
  if (player.team === otherPlayer.team) {
    return this.teammateDetection(player, otherPlayer);
  } else {
    return this.enemyDetection(player, otherPlayer);
  }
};

Collisions.teammateDetection = function(player, teammate) {
  return this.collisionDetection(player, teammate)
};

Collisions.enemyDetection = function(player, enemy) {
  return this.collisionDetection(player, enemy)
};

Collisions.windowDetection = function(position, direction) {
  // tests for if moving in x or y direction
  if (direction === 'x') {
    if (position > minWidth + (player.radius - .01) && position < maxWidth - (player.radius - .01)) {
      return true;
    }
    else {
      console.log('we be stuck X');
      return false;
    }
  }
  else {
    if (position > minHeight + (player.radius - .01) && position < maxHeight - (player.radius - .01)) {
      return true;
    }
    else {
      console.log('we be stuck Y');
      return false;
    }
  }
}