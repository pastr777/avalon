/**
 * Created by PastR on 19/05/16.
 */
concept = {};
// ассоциация
    concept.Ass = {};
    // диссоциация
    concept.Diss = {};

// выведение, от обзего к частному
concept.deductio = {};
// наведение, от частного к общему
concept.inducere = {};
// сведение, отведение; из посылки, которая является условным высказыванием, и заключения вытекает вторая посылка.
concept.abducere = {};
// сведение, возведение, приведение (сложное к простому)
concept.reductio = {};
//принадлежность
concept.term = {};

// операции, правила редукции
// конъюкция, и, умножение
concept.conjunctio = {};
// дизъюкция, или, сложение
concept.disjunctio = {};
//имплткация, если ..., то...,карма, причина-следствие
concept.implicatio = {};
//эквиваленция, ===
concept.ekvivalentsiya = {};
//отрицание, «не», !
//пример для conjunctio
concept.__conjunctio = {};

// кванторы
// всеобщности,  	FOR ALL 	U+2200 	&#8704; «для всех…», «для каждого…», «для любого…» или «все…», «каждый…», «любой…».
concept._A = {};
//существования, THERE EXISTS 	U+2203 	&#8707; «существует» или «для некоторого»
//(THERE DOES NOT EXIST 	U+2204 	&#8708;)
concept._E = {};
//существования и единственности, «существует и единственный»
concept._E1 = {};

// предикат, операнд
concept.P = function (nx, func) {return func(_E_(nx));};//TODO
//принадлежерсть
concept._E_ = function (x, M) {return M.hasOwnProperty(x);};

//эмерджентность
concept.emergent = {};//summ(term);

//прецессия

