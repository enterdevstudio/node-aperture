/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var language = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Rule":3,"List":4,"Effect":5,"Conditions":6,"EOF":7,"Identifier":8,"AND":9,"LongList":10,"All":11,",":12,"CAN":13,"NOT":14,"If":15,"OrCondition":16,"IF":17,"WHEN":18,"WHERE":19,"OR":20,"AndCondition":21,"NotCondition":22,"Condition":23,"Lhs":24,"String":25,"IN":26,"(":27,"CommaSeparatedList":28,")":29,"::":30,"STRING":31,"STRING_LITERAL":32,"FUZZY_STRING":33,"REGEX_LITERAL":34,"ALL":35,"EVERYTHING":36,"ANYTHING":37,"*":38,"$accept":0,"$end":1},
terminals_: {2:"error",7:"EOF",9:"AND",12:",",13:"CAN",14:"NOT",17:"IF",18:"WHEN",19:"WHERE",20:"OR",26:"IN",27:"(",29:")",30:"::",31:"STRING",32:"STRING_LITERAL",33:"FUZZY_STRING",34:"REGEX_LITERAL",35:"ALL",36:"EVERYTHING",37:"ANYTHING",38:"*"},
productions_: [0,[3,6],[3,5],[3,5],[3,4],[4,1],[4,3],[4,1],[4,1],[10,6],[10,5],[10,3],[5,1],[5,2],[6,2],[6,0],[15,1],[15,1],[15,1],[16,3],[16,1],[21,3],[21,1],[22,2],[22,1],[23,3],[23,5],[23,3],[24,3],[24,1],[28,1],[28,3],[8,1],[8,1],[8,1],[8,1],[11,1],[11,1],[11,1],[11,1],[25,1],[25,1],[25,1],[25,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
            return {
                principals: $$[$0-5],
                effect: $$[$0-4],
                actions: $$[$0-3],
                resources: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 2:
            return {
                principals: $$[$0-4],
                effect: $$[$0-3],
                actions: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 3:
            return {
                effect: $$[$0-4],
                actions: $$[$0-3],
                resources: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 4:
            return {
                effect: $$[$0-3],
                actions: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 5:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 6:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-2] instanceof RegExp) {
                this.$.regex.push($$[$0-2].toString());
            } else {
                this.$.exact[$$[$0-2]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 8:
            this.$ = 1;
        
break;
case 9:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-5] instanceof RegExp) {
                this.$.regex.push($$[$0-5].toString());
            } else {
                this.$.exact[$$[$0-5]] = true;
            }

            if ($$[$0-3] instanceof RegExp) {
                this.$.regex.push($$[$0-3].toString());
            } else {
                this.$.exact[$$[$0-3]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 10:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-4] instanceof RegExp) {
                this.$.regex.push($$[$0-4].toString());
            } else {
                this.$.exact[$$[$0-4]] = true;
            }

            if ($$[$0-2] instanceof RegExp) {
                this.$.regex.push($$[$0-2].toString());
            } else {
                this.$.exact[$$[$0-2]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 11:
            if ($$[$0-2] instanceof RegExp) {
                $$[$0].regex.push($$[$0-2].toString());
            } else {
                $$[$0].exact[$$[$0-2]] = true;
            }
            this.$ = $$[$0];
        
break;
case 12:
            this.$ = true;
        
break;
case 13:
            this.$ = false;
        
break;
case 14:
            this.$ = $$[$0];
        
break;
case 15:
            this.$ = [];
        
break;
case 19:
            this.$ = ['or', $$[$0-2], $$[$0]];
        
break;
case 21:
            this.$ = ['and', $$[$0-2], $$[$0]];
        
break;
case 23:
            this.$ = ['not', $$[$0]];
        
break;
case 25:
            var lhs = $$[$0-2];
            var op = $$[$0-1].toLowerCase();
            var rhs = $$[$0];
            yy.validate(op, lhs.name, rhs, lhs.type);
            this.$ = [ op, lhs, rhs ];
        
break;
case 26:
            var lhs = $$[$0-4];
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];
            rhs.forEach(function (i) {
                yy.validate('=', lhs.name, i, lhs.type);
            });
            this.$ = [ op, lhs, rhs ];
        
break;
case 27:
            this.$ = $$[$0-1];
        
break;
case 28:
            this.$ = {name: $$[$0-2], type: $$[$0]};
        
break;
case 29:
            this.$ = {name: $$[$0]};
        
break;
case 30:
            this.$ = [ $$[$0] ];
        
break;
case 31:
            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 34:
            this.$ = new RegExp(fuzzyToRegex($$[$0]));
        
break;
case 35:
            var literal = $$[$0];
            var last = literal.lastIndexOf("/");
            var body = literal.substring(1, last);
            var flags = literal.substring(last + 1);
            this.$ = new RegExp(body, flags);
        
break;
}
},
table: [{3:1,4:2,5:3,8:4,10:5,11:6,13:[1,7],31:[1,8],32:[1,9],33:[1,10],34:[1,11],35:[1,12],36:[1,13],37:[1,14],38:[1,15]},{1:[3]},{5:16,13:[1,7]},{4:17,8:4,10:5,11:6,31:[1,8],32:[1,9],33:[1,10],34:[1,11],35:[1,12],36:[1,13],37:[1,14],38:[1,15]},{7:[2,5],9:[1,18],12:[1,19],13:[2,5],17:[2,5],18:[2,5],19:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],35:[2,5],36:[2,5],37:[2,5],38:[2,5]},{7:[2,7],13:[2,7],17:[2,7],18:[2,7],19:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],35:[2,7],36:[2,7],37:[2,7],38:[2,7]},{7:[2,8],13:[2,8],17:[2,8],18:[2,8],19:[2,8],31:[2,8],32:[2,8],33:[2,8],34:[2,8],35:[2,8],36:[2,8],37:[2,8],38:[2,8]},{14:[1,20],31:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12],37:[2,12],38:[2,12]},{7:[2,32],9:[2,32],12:[2,32],13:[2,32],17:[2,32],18:[2,32],19:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32]},{7:[2,33],9:[2,33],12:[2,33],13:[2,33],17:[2,33],18:[2,33],19:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33]},{7:[2,34],9:[2,34],12:[2,34],13:[2,34],17:[2,34],18:[2,34],19:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34],37:[2,34],38:[2,34]},{7:[2,35],9:[2,35],12:[2,35],13:[2,35],17:[2,35],18:[2,35],19:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35]},{7:[2,36],13:[2,36],17:[2,36],18:[2,36],19:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36]},{7:[2,37],13:[2,37],17:[2,37],18:[2,37],19:[2,37],31:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37]},{7:[2,38],13:[2,38],17:[2,38],18:[2,38],19:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38]},{7:[2,39],13:[2,39],17:[2,39],18:[2,39],19:[2,39],31:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39]},{4:21,8:4,10:5,11:6,31:[1,8],32:[1,9],33:[1,10],34:[1,11],35:[1,12],36:[1,13],37:[1,14],38:[1,15]},{4:22,6:23,7:[2,15],8:4,10:5,11:6,15:24,17:[1,25],18:[1,26],19:[1,27],31:[1,8],32:[1,9],33:[1,10],34:[1,11],35:[1,12],36:[1,13],37:[1,14],38:[1,15]},{8:28,31:[1,8],32:[1,9],33:[1,10],34:[1,11]},{8:29,10:30,31:[1,8],32:[1,9],33:[1,10],34:[1,11]},{31:[2,13],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],37:[2,13],38:[2,13]},{4:31,6:32,7:[2,15],8:4,10:5,11:6,15:24,17:[1,25],18:[1,26],19:[1,27],31:[1,8],32:[1,9],33:[1,10],34:[1,11],35:[1,12],36:[1,13],37:[1,14],38:[1,15]},{6:33,7:[2,15],15:24,17:[1,25],18:[1,26],19:[1,27]},{7:[1,34]},{14:[1,38],16:35,21:36,22:37,23:39,24:40,25:42,27:[1,41],31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{14:[2,16],27:[2,16],31:[2,16],32:[2,16],33:[2,16],38:[2,16]},{14:[2,17],27:[2,17],31:[2,17],32:[2,17],33:[2,17],38:[2,17]},{14:[2,18],27:[2,18],31:[2,18],32:[2,18],33:[2,18],38:[2,18]},{7:[2,6],13:[2,6],17:[2,6],18:[2,6],19:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],35:[2,6],36:[2,6],37:[2,6],38:[2,6]},{9:[1,48],12:[1,47]},{7:[2,11],13:[2,11],17:[2,11],18:[2,11],19:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11]},{6:49,7:[2,15],15:24,17:[1,25],18:[1,26],19:[1,27]},{7:[1,50]},{7:[1,51]},{1:[2,4]},{7:[2,14],20:[1,52]},{7:[2,20],9:[1,53],20:[2,20],29:[2,20]},{7:[2,22],9:[2,22],20:[2,22],29:[2,22]},{14:[1,38],22:54,23:39,24:40,25:42,27:[1,41],31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{7:[2,24],9:[2,24],20:[2,24],29:[2,24]},{25:55,26:[1,56],31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{14:[1,38],16:57,21:36,22:37,23:39,24:40,25:42,27:[1,41],31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{26:[2,29],30:[1,58],31:[2,29],32:[2,29],33:[2,29],38:[2,29]},{7:[2,40],9:[2,40],12:[2,40],20:[2,40],26:[2,40],29:[2,40],30:[2,40],31:[2,40],32:[2,40],33:[2,40],38:[2,40]},{7:[2,41],9:[2,41],12:[2,41],20:[2,41],26:[2,41],29:[2,41],30:[2,41],31:[2,41],32:[2,41],33:[2,41],38:[2,41]},{7:[2,42],9:[2,42],12:[2,42],20:[2,42],26:[2,42],29:[2,42],30:[2,42],31:[2,42],32:[2,42],33:[2,42],38:[2,42]},{7:[2,43],9:[2,43],12:[2,43],20:[2,43],26:[2,43],29:[2,43],30:[2,43],31:[2,43],32:[2,43],33:[2,43],38:[2,43]},{8:29,9:[1,59],10:30,31:[1,8],32:[1,9],33:[1,10],34:[1,11]},{8:60,31:[1,8],32:[1,9],33:[1,10],34:[1,11]},{7:[1,61]},{1:[2,2]},{1:[2,3]},{14:[1,38],21:62,22:37,23:39,24:40,25:42,27:[1,41],31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{14:[1,38],22:63,23:39,24:40,25:42,27:[1,41],31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{7:[2,23],9:[2,23],20:[2,23],29:[2,23]},{25:64,31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{27:[1,65]},{20:[1,52],29:[1,66]},{25:67,31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{8:68,31:[1,8],32:[1,9],33:[1,10],34:[1,11]},{7:[2,10],13:[2,10],17:[2,10],18:[2,10],19:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10]},{1:[2,1]},{7:[2,19],9:[1,53],20:[2,19],29:[2,19]},{7:[2,21],9:[2,21],20:[2,21],29:[2,21]},{7:[2,25],9:[2,25],20:[2,25],29:[2,25]},{25:70,28:69,31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{7:[2,27],9:[2,27],20:[2,27],29:[2,27]},{26:[2,28],31:[2,28],32:[2,28],33:[2,28],38:[2,28]},{7:[2,9],13:[2,9],17:[2,9],18:[2,9],19:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9]},{12:[1,72],29:[1,71]},{12:[2,30],29:[2,30]},{7:[2,26],9:[2,26],20:[2,26],29:[2,26]},{25:73,31:[1,43],32:[1,44],33:[1,45],38:[1,46]},{12:[2,31],29:[2,31]}],
defaultActions: {34:[2,4],50:[2,2],51:[2,3],61:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/**
 * Extremely roundabout way of processing escaped asterisks in a fuzzy string,
 * since Javascript doesn't support negative lookbehinds.
 *
 * First, escape all RegExp special characters. Unescaped * will now be '\*' and
 * escaped * will now be '\\\*'.
 * Replace '\\\*' with '*'. All literal * will have no backslashes before them.
 * Replace '\*' with '.*'. All fuzzy * will now be '.*'
 * Finally, replace all * with no . before them into '\*' using negative
 * lookahead.
 *
 * as\*d*f -> as\\\*d\*f -> as*d\*f -> as*d.*f -> as\*d.*f
 */
function fuzzyToRegex(str) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    str = str.replace('\\\\\\*', '*');
    str = str.replace('\\*', '.*');
    str = str.replace(/(?:([^\.]))\*/,'$1\\*');
    return (str);
}
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whritespace */
break;
case 1:return 7;
break;
case 2:return 9;
break;
case 3:return 20;
break;
case 4:return 14;
break;
case 5:return 13;
break;
case 6:return 'TO';
break;
case 7:return 17;
break;
case 8:return 18;
break;
case 9:return 19;
break;
case 10:return 35;
break;
case 11:return 36;
break;
case 12:return 37;
break;
case 13:return 26;
break;
case 14:return 30;
break;
case 15:return 12;
break;
case 16:return 27;
break;
case 17:return 29;
break;
case 18:
        yy_.yytext = yy_.yytext.substr(0, yy_.yytext.lastIndexOf('::'));
        return "REGEX_LITERAL";
    
break;
case 19:
        yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
        return 32;
    
break;
case 20:
        if (yy_.yytext === '*') {
            return 38;
        } else if (yy_.yytext.match(/[*]/)) {
            return 33;
        } else {
            return 31;
        }
    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:$)/i,/^(?:AND\b)/i,/^(?:OR\b)/i,/^(?:NOT\b)/i,/^(?:CAN\b)/i,/^(?:TO\b)/i,/^(?:IF\b)/i,/^(?:WHEN\b)/i,/^(?:WHERE\b)/i,/^(?:ALL\b)/i,/^(?:EVERYTHING\b)/i,/^(?:ANYTHING\b)/i,/^(?:IN\b)/i,/^(?:::)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:(\/((([^\n\r\*\\\/\[])|(\\([^\n\r]))|(\[([^\n\r\]\\]|(\\([^\n\r])))*\]))(([^\n\r\\\/\[])|(\\([^\n\r]))|(\[([^\n\r\]\\]|(\\([^\n\r])))*\]))*)\/([a-z]*))::regexp?)/i,/^(?:"(?:(\\)["bfnrt/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])*")/i,/^(?:([^\s,():](:(?!:))?)+)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = language;
exports.Parser = language.Parser;
exports.parse = function () { return language.parse.apply(language, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}