$(document).ready(function() {
  var choice = ['pierre', 'feuille', 'ciseaux'];
  var win = 0;
  var loose = 0;
  $('#pierre, #feuille, #ciseaux').click(function() {
    // aléatorise les valeures du tableau choice
    var randomChoice = choice[Math.floor(Math.random() * choice.length)];
    // me = la valeure du boutton cliqué
    var me = $(this).attr('id');
    // affiche la valeure choisi et la valeure aléatoire
    $('#computerMove').text(randomChoice);
    $('#yourMove').text(me);
    // opponent = la valeure aléatoire affichée
    var opponent = $('#computerMove').text();
    // résultats shifumi
    if ((me == 'pierre' && opponent == 'feuille') || (me == 'ciseaux' && opponent == 'pierre') || (me == 'feuille' && opponent == 'ciseaux')) {
      $('#result').text('Vous avez perdu !');
      loose++;
    } else if ((me == 'pierre' && opponent == 'ciseaux') || (me == 'ciseaux' && opponent == 'feuille') || (me == 'feuille' && opponent == 'pierre')) {
      $('#result').text('Vous avez gagné !');
      win++;
    } else if (me == opponent) {
      $('#result').text('égalité');
    }
    $('#win').text('Vous avez ' + win + ' victoires');
    $('#loose').text('Vous avez ' + loose + ' défaites');
    var winRate = Math.round((win / (win + loose)) * 100);
    $('#winRate').text('Poucentage de victoire : ' + winRate + '%');
  });
});
