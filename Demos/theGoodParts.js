var quo = function (status) {
    return {
        get_status: function ( ) {
            return status;
        }
    };
};
// Make an instance of quo.
var myQuo = quo("amazed");
document.writeln(myQuo.get_status( ));

var serial_maker = function ( ) {
// Produce an object that produces unique strings. A
// unique string is made up of two parts: a prefix
// and a sequence number. The object comes with
// methods for setting the prefix and sequence
// number, and a gensym method that produces unique
// strings.
var prefix = '';
var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
    },
        set_seq: function (s) {
            seq = s;
    },
        gensym: function ( ) {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};

var seqer = serial_maker( );
seqer.set_prefix = ('Q');
seqer.set_seq = (1000);
var unique = seqer.gensym( ); // unique is "Q1000"

////////
request = prepare_the_request( );
send_request_asynchronously(request, function (response) {
display(response);
});

/////////

var Mammal = function (name) {
this.name = name;
};
Mammal.prototype.get_name = function ( ) {
return this.name;
};
Mammal.prototype.says = function ( ) {
return this.saying || '';
};
//Now, we can make an instance:
var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name( ); // 'Herb the Mammal'
//We can make another pseudoclass that inherits from Mammal by defining its
//constructor function and replacing its prototype with an instance of Mammal:
var Cat = function (name) {
this.name = name;
this.saying = 'meow';
};
// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal( );
// Augment the new prototype with
// purr and get_name methods.
Cat.prototype.purr = function (n) {
var i, s = '';
for (i = 0; i < n; i += 1) {
if (s) {
s += '-';
}
s += 'r';
}
return s;
};
Cat.prototype.get_name = function ( ) {
return this.says( ) + ' ' + this.name +
' ' + this.says( );
};
var myCat = new Cat('Henrietta');
var says = myCat.says( ); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name( );
//'meow Henrietta meow'

//Prototypal inheritance
var myMammal = {
name : 'Herb the Mammal',
get_name : function ( ) {
return this.name;
},
says : function ( ) {
return this.saying || '';
}
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
var i, s = '';
for (i = 0; i < n; i += 1) {
if (s) {
s += '-';
}
s += 'r';
}
return s;
};
myCat.get_name = function ( ) {
return this.says( ) + ' ' + this.name + ' ' + this.says( );
};

//Functional inheritance
var mammal = function (spec) {
var that = {};
that.get_name = function ( ) {
return spec.name;
};
that.says = function ( ) {
return spec.saying || '';
};
return that;
};
var myMammal = mammal({name: 'Herb'});

var cat = function (spec) {
spec.saying = spec.saying || 'meow';
var that = mammal(spec);
that.purr = function (n) {
var i, s = '';
for (i = 0; i < n; i += 1) {
if (s) {
s += '-';
}
s += 'r';
}
return s;
};
that.get_name = function ( ) {
return that.says( ) + ' ' + spec.name +
' ' + that.says( );
return that;
};
var myCat = cat({name: 'Henrietta'});