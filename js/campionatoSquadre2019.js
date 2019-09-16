﻿
//        CAMPIONATO.gironi = JSON.parse(stgironi);   

//https://api.chess.com/pub/club/i-bagna-cauda
//https://api.chess.com/pub/club/i-4-formaggi-doc/matches
//https://api.chess.com/pub/club/team-italia-doc/matches

var calcolaClassificaRun = false;
var classificaTeams = [];

var teams = [];
teams['pan-di-via']={"name":"Pan di Via", "club_id":79508,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79508.29404629.50x50o.d9ee86bdbcb1.png","url":"https://www.chess.com/club/pan-di-via","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['i-bagna-cauda']={"name":"I Bagna Cauda","club_id":79538,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79538.2add8a97.50x50o.ad97c61746e8.png","url":"https://www.chess.com/club/i-bagna-cauda","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['gli-abbacchi-doc']={"name":"Gli Abbacchi DOC", "club_id":79500,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79500.7464f9c4.50x50o.f127823db225.png","url":"https://www.chess.com/club/gli-abbacchi-doc","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['le-mozzarelle']={"name":"Le Mozzarelle", "club_id":79544,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79544.a9aad2ac.50x50o.57d6d04ca1cf.png","url":"https://www.chess.com/club/le-mozzarelle","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['chianti-doc']={"name":"Chianti DOC","club_id":79546,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79546.b573e269.50x50o.8ba13052ce81.png","url":"https://www.chess.com/club/chianti-doc","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['gli-scaciucchi']={"name":"Gli Scaciucchi","club_id":79502,"icon":"https://www.chess.com/club/join/79502","icon":"https://images.chesscomfiles.com/uploads/v1/group/79502.b4925ba9.50x50o.5c6b00a69cd6.png","url":"https://www.chess.com/club/gli-scaciucchi","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['i-4-formaggi-doc']={"name":"I 4 Formaggi DOC", "club_id":79506,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79506.375b4d1c.50x50o.139f82627007.png","url":"https://www.chess.com/club/i-4-formaggi-doc","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['straccetti-e-broccoli-doc']={"name":"Straccetti e Broccoli DOC","club_id":79510,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79510.42f4cbbc.50x50o.f47b01837903.png","url":"https://www.chess.com/club/straccetti-e-broccoli-doc","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['i-fan-dellimpepata-di-cozze']={"name":"I Fan dell'Impepata di Cozze","club_id":79540,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79540.8a2da67f.50x50o.9571bd046720.png","url":"https://www.chess.com/club/i-fan-dellimpepata-di-cozze","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['i-4-scacchi-di-lasagne']={"name":"I 4 Scacchi di Lasagne","club_id":79504,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79504.5a4934a4.50x50o.53f1ca78f01e.png","url":"https://www.chess.com/club/i-4-scacchi-di-lasagne","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['gli-ultimi-saranno-i-primi-i-secondi-o-i-contorni']={"name":"gli ultimi saranno i primi i secondi o i contorni","club_id":78984,"icon":"https://images.chesscomfiles.com/uploads/v1/group/78984.0fe19eef.50x50o.008a63d2fd9a.jpeg","url":"https://www.chess.com/club/gli-ultimi-saranno-i-primi-i-secondi-o-i-contorni","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
teams['team-fastfood-doc']={"name":"Team FastFood DOC","club_id":79318,"icon":"https://images.chesscomfiles.com/uploads/v1/group/79318.d534e8da.50x50o.927f535ba0c6.png","url":"https://www.chess.com/club/team-fastfood-doc","puntiInCorso":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};

var matchs = [];
matchs[11] = {"penalità1":0.5,"penalità2":0.5,"id":"https://api.chess.com/pub/match/1031850", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[12] = {"penalità1":0,"penalità2":0.5,"id":"https://api.chess.com/pub/match/1031852", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[13] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1031854", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[14] = {"penalità1":0.5,"penalità2":0.5,"id":"https://api.chess.com/pub/match/1031856", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[15] = {"penalità1":0.5,"penalità2":0,"id":"https://api.chess.com/pub/match/1031862", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[16] = {"penalità1":0.5,"penalità2":0,"id":"https://api.chess.com/pub/match/1031858", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

matchs[21] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1041516", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[22] = {"penalità1":0,"penalità2":0.5,"id":"https://api.chess.com/pub/match/1041510", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[23] = {"penalità1":0.5,"penalità2":0.5,"id":"https://api.chess.com/pub/match/1041514", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[24] = {"penalità1":0,"penalità2":0.5,"id":"https://api.chess.com/pub/match/1041512", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[25] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1041518", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[26] = {"penalità1":0.5,"penalità2":0,"id":"https://api.chess.com/pub/match/1041520", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

/*
matchs[31] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[32] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[33] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[34] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[35] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[36] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

matchs[41] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[42] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[43] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[44] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[45] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[46] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

matchs[51] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[52] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[53] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[54] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[55] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[56] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

matchs[61] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[62] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[63] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[64] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[65] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[66] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

matchs[1] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[2] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[3] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[4] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[5] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
matchs[6] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

*/

//teams['team-italia-doc']={"name":"Team Italia DOC","club_id":79318,"icon":"https://images.chesscomfiles.com/uploads/v1/group/65264.ad20dc08.50x50o.1ba052e2d947.png","url":"https://www.chess.com/club/team-fastfood-doc","punti":0,"penalità":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : []};
//teams['purple-haze']={"name":"PURPLE HAZE","club_id":79318,"icon":"https://images.chesscomfiles.com/uploads/v1/group/5140.5fe353d8.50x50o.b653b7d9fcb8.gif","url":"https://www.chess.com/club/team-fastfood-doc","punti":0,"penalità":0,"puntiSpareggio":0, "matchConclusi":0, "puntiConclusi":0, "posizione":0, "teamVinte" : [], "teamPatte" : []};
//matchs[21] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/910346", "daCaricare":true, "punti1":0, "punti2":0};


function elabora() {
    //Carico i dati di tutti i match
    for (var i in matchs) {
        caricaMatch(i, matchs[i].id);
    };
}

function caricaMatch(index, url)
{
    //Leggo i dati 
    $.getJSON(url,function(data){

        if (data.status != 'registration') 
        {
            //leggo team
            var team1 = data.teams.team1.url.substr(27, data.teams.team1.url.length-27);
            var team2 = data.teams.team2.url.substr(27, data.teams.team2.url.length-27);
            //Aggiorno partite
            matchs[index].url = data.url;
            matchs[index].boards = data.boards;
            matchs[index].team1 = team1;
            matchs[index].team2 = team2;
            matchs[index].score1 = data.teams.team1.score;
            matchs[index].score2 = data.teams.team2.score;
            if (data.teams.team1.score > data.teams.team2.score) 
            {
                matchs[index].punti1 ++;
                teams[team1].teamVinte.push(team2);
            }    
            if (data.teams.team1.score < data.teams.team2.score) 
            {
                matchs[index].punti2 ++;
                teams[team2].teamVinte.push(team1);
            }    
            if (data.teams.team1.score == data.teams.team2.score) {
                matchs[index].punti1 += 0.5;
                matchs[index].punti2 += 0.5;
                teams[team1].teamPatte.push(team2);
                teams[team2].teamPatte.push(team1);
            } 
            //Aggiorno punteggi team
            teams[team1].penalità += matchs[index].penalità1;
            teams[team2].penalità += matchs[index].penalità2;

            //Se terminata anche matematicamente
            if (matchs[index].boards * 2 == matchs[index].score1 + matchs[index].score2 || matchs[index].boards < matchs[index].score1 || matchs[index].boards < matchs[index].score2)
            {
                matchs[index].concluso = true;
                teams[team1].matchConclusi ++;
                teams[team2].matchConclusi ++;
                if (matchs[index].score1 > matchs[index].score2)
                    teams[team1].puntiConclusi ++;
                if (matchs[index].score1 < matchs[index].score2)
                    teams[team2].puntiConclusi ++;
                if (matchs[index].score1 == matchs[index].score2)
                {
                    teams[team1].puntiConclusi += 0.5;
                    teams[team2].puntiConclusi += 0.5;
                }
            } else {
                //Match in corso, aggiorno punteggio
                teams[team1].puntiInCorso += matchs[index].punti1;
                teams[team2].puntiInCorso += matchs[index].punti2;
            }
            //Controllo giocatori
            var username1 = '';
            var username2 = '';
            var risultato = '';
            for (var i in data.teams.team1.players) {
                username1 = data.teams.team1.players[i].username;
                username2 = data.teams.team2.players[i].username;
                //Se partita terminata calcolo punteggio
                //I GIOCATORI NON SONO ABBINATI. Con questi dati non posso 
                //  calcolare tie-break
                risultato = data.teams.team1.players[i].played_as_white;
                setPunti(username1, risultato);
                risultato = data.teams.team1.players[i].played_as_black;
                setPunti(username1, risultato);
                risultato = data.teams.team2.players[i].played_as_white;
                setPunti(username2, risultato);
                risultato = data.teams.team2.players[i].played_as_black;
                setPunti(username2, risultato);
            }
        }

        //Se ho caricato tutti i dati calcolo la classifica
        matchs[index].daCaricare = false;
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
            calcolaClassificaRun = true;

        //Calcolo la classifica dei team
        calcolaClassifica();
  
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
            var index = 0;
                for (var i in matchs) {
                    if (matchs[i].url = this.url)
                        index = i;
                };
                caricaMatch(index, this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
            }
              
        });
};

//calcolo classifica team
function calcolaClassifica()
{
    //calcolo punti spareggio
    //  SENZA PENALITA'
    /*  NON USATO
    for (var nameTeam in teams)
    {
        for (var i in teams[nameTeam].teamVinte)
            teams[nameTeam].puntiSpareggio += teams[teams[nameTeam].teamVinte[i]].punti;
        for (var i in teams[nameTeam].teamPatte)
            teams[nameTeam].puntiSpareggio += teams[teams[nameTeam].teamPatte[i]].punti / 2;
    }
    */

    //Tolgo dai punti le penalità per calcolare la classifica
    for (var nameTeam in teams)
    {
        teams[nameTeam].puntiMatchRisolti = teams[nameTeam].puntiConclusi;
        teams[nameTeam].puntiConclusi -= teams[nameTeam].penalità;
    }
    //Imposto posizione e salvo
    var gruppo = '';
    var max = -1;
    var maxSpareggio = 0;
    var posizione = 0;
    var oldMax = -1;
    var oldSpareggio = -1;
    var nPareggi = 0;
    var puntiClassifica = 0;
    while (max > -100)
    {
        max = -200;
        maxSpareggio = -1;
        for (var i in teams)
        {
            //Scelgo i punti (da conclusi oi in corso)
            puntiClassifica = teams[i].puntiConclusi;

            if ((teams[i].posizione == 0) && (puntiClassifica > max || (puntiClassifica == max) && teams[i].puntiSpareggio > maxSpareggio)) {
                gruppo = i;
                max = puntiClassifica;
                maxSpareggio = teams[i].puntiSpareggio;
            }
        }
        if (max > -100) 
        {
            if (oldMax == max && oldSpareggio == maxSpareggio )
            {
                nPareggi++;
            } else {
                posizione++;
                posizione += nPareggi;
                nPareggi = 0;
                oldMax = max;
                oldSpareggio = maxSpareggio;
            }    
            teams[gruppo].posizione = posizione;
            //Aggiungo il team nella posizione corretta
            classificaTeams.push(gruppo);
        }
    }

    //Stampo la classifica
    var url  = '';
    var stile = '';
    var stileTD = '';
    var gruppoAvversario = '';
    var risultato = '';
    var boards = '';
    var score1 = 0;
    var score2 = 0;
    var partitaConclusa = false;
    //Riga con nomi teams    
    var stRiga = '<tr class="classifica-nameTeam">' +
            '<td style="background-color:gray;"></td><td style="background-color:gray;"></td><td style="background-color:gray;">' + 
            //'</td><td style="background-color:gray;">'+
            '</td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td class="classifica-nameTeam"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga con Icone    
    stRiga = '<tr class="classifica-icon">' +
            '<td class="classifica-icon" style="background-color:#E2E2FF;">Pos.</td> <td style="background-color:#E2E2FF;">Team</td><td style="background-color:#E2E2FF;"></td>'+
            '<td class="classifica-icon">Punti</td>' +
            //'<td class="classifica-icon">Tie Break</td>'+
            '<td class="classifica-icon">Punti dai match risolti</td><td class="classifica-icon" >Penalità</td>' +
            //'<td class="classifica-icon">Punti dai match in corso</td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td  class="classifica-icon">  <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '">';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga team
    for (var i in classificaTeams)         
    {
        gruppo = classificaTeams[i];
        stRiga = '<tr class="classifica-risultati">' +
            '<td class="classifica-risultati">' + teams[gruppo].posizione + '</td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '"></td>' +
            '<td class="classifica-risultati">' + teams[gruppo].puntiConclusi + '</td>' + 
            //'<td class="classifica-risultati">' + teams[gruppo].puntiSpareggio + '</td>' +
            '<td class="classifica-risultati">' + teams[gruppo].puntiMatchRisolti + '</td>' +
            '<td class="classifica-risultati">' + (teams[gruppo].penalità*-1) + '</td>' +
            //'<td class="classifica-risultati">' + teams[gruppo].puntiInCorso + '</td>' +  
            '<td class="classifica-col1SEP" style="border: 0px;"></td>'; 
        for (var ii in classificaTeams)         
        {
            gruppoAvversario  = classificaTeams[ii];
            stile = '';
            stileTD = '';
            risultato = '';
            partitaConclusa = false;
            if  (gruppo == gruppoAvversario)
            {
                url = '';
                stile = 'background-color:#b3b3b3;';
            } else {
                //Ricerco partita
                boards = 0;
                url = '';
                for (var partita in matchs)         
                {
                    //team da stampare sulla riga è team1
                    if (matchs[partita].team1 == gruppo && matchs[partita].team2 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards;
                        score1 = matchs[partita].score1;
                        score2 = matchs[partita].score2;
                        partitaConclusa = matchs[partita].concluso;
                    } 
                    //team da stampare sulla riga è team2
                    if (matchs[partita].team2 == gruppo && matchs[partita].team1 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards;
                        score1 = matchs[partita].score2;
                        score2 = matchs[partita].score1;
                        partitaConclusa = matchs[partita].concluso;
                    }
                }

                //Se la partita esiste
                if (boards > 0)
                {
                    //Se terminata
                    if (partitaConclusa)
                    {
                        //Pareggio
                        if (score1 == score2)
                        {
                            risultato = '0.5 - 0.5 <BR> (' + score1 + ' - ' + score2 + ')';
                            stileTD = 'style="background-color:#84b2ed;border: 1px solid black;"';   //PAREGGIO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 1
                        if (score1 > score2)
                        {
                            risultato = '1 - 0 <BR> (' + score1 + ' - ' + score2 + ')';
                            stileTD = 'style="background-color:#4bc74b;border: 1px solid black;"'; //VINTO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 2
                        if (score1 < score2)
                        {
                            risultato = '0 - 1 <BR> (' + score1 + ' - ' + score2 + ')';
                            stileTD = 'style="background-color:#f75959;border: 1px solid black;"';  //PERSO
                            stile = 'color:black;font-weight: bold;';
                        } 
                    } else {
                        //Match da terminare
                        risultato = score1 + ' - ' + score2 + '<BR> ('+ (score1+score2) + '/' + (boards*2) + ')';
                        //Pareggio
                        if (score1 == score2)
                            stile = 'color:blue;';
                        //Vinto team 1
                        if (score1 > score2)
                            stile = 'color:green;';
                        //Vinto team 2
                        if (score1 < score2)
                            stile = 'color:red;';
                        stileTD = 'style="border: 1px solid black;"';  //PERSO
                    }
                }
            }
                    

            //Scrivo valori calcolati nella cella
            if (url == '')   //stessa squadra
                stRiga += '<td class="classifica-risultati" style="' + stile + '"> </td>'
            else
               stRiga += '<td ' + stileTD + '> <a style="text-decoration: none;font-weight: normal;' + stile + ' " href="' + url +'" target=”_blank”>' + risultato + '</a></td>';
        }
        stRiga += '</tr>'
        $("#classifica").append(stRiga);
    }




    //Ricerco elo e stampo classifica giocatori
    getAvatar();
}

    