/**
 * Created by PastR on 19/05/16.
 */
M = {};
M.k= {};

M.k.deltaS = 1 + Math.SQRT2;
M.k.E = Math.E;
M.k.P = Math.PI;
M.k.F = (1 + Math.sqrt(5))/2;
//M.k.f = 1/M.k.F;

/* GOLDEN RATIO
* l - section size, p - type of section
* a = AB, b = AC, c = CB
* a = b + c; b > c
* p = 1, l = a
* p = 2, l = b
* p = 3, l = c
*/

M.k.Gold = function (l,p)
{
    var a, b, c, F = M.k.F, r = false;

    switch (p)
    {
        case 1:
            a = l;
            b = a / F;
            c = a - b;
            if ((c * F) == b) r = true;
            break;
        case 2:
            b = l;
            a = b * F;
            c = a - b;
            if ((c * F) == b) r = true;
            break;
        case 3:
            c = l;
            b = c * F;
            a = b + c;
            if ((b * F) == a) r = true;
            break;
    }
    return [a,b,c,r];
};
M.k.Fibonacci = function (n,p)
{
    var seq = [0,1], val, sum = 1;

    for (var i = 1; i < n; i++)
    {
        val = (seq[i] + seq [i-1]);
        seq.push(val);
        sum += val;
    }
    return [seq, sum];
};