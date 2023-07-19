const GLPK = require('glpk.js');
const glpk = GLPK();
const options = {
    msglev: glpk.GLP_MSG_ALL,
    presol: true,
    cb: {
        call: progress => console.log(progress),
        each: 1
    }
};


const res = glpk.solve({
    name: 'LP',
    objective: {
        direction: glpk.GLP_MAX,
        name: 'obj',
        vars: [
            { name: 'vi', coef: 1 }
        ]
    },
    subjectTo: [
        {
            name: 'learn_vi_p_cons',
            vars: [
                { name: 'vi_p', coef: -1.0 },
                { name: 'learn_vi_p', coef: 1.0 }
            ],
            bnds: { type: glpk.GLP_UP, ub: 0.0, lb: 0.0 }
        },
        {
            name: 'learn_vi_pp_cons',
            vars: [
                { name: 'vi_pp', coef: -1.0 },
                { name: 'learn_vi_pp', coef: 1.0 }
            ],
            bnds: { type: glpk.GLP_UP, ub: 0.0, lb: 0.0 }
        },
        {
            name: 'learn_vi_ppp_cons',
            vars: [
                { name: 'vi_ppp', coef: -1.0 },
                { name: 'learn_vi_ppp', coef: 1.0 }
            ],
            bnds: { type: glpk.GLP_UP, ub: 0.0, lb: 0.0 }
        },
        {
            name: 'viup_lambda_cons',
            vars: [
                { name: 'vi_p', coef: -1.0 },
                { name: 'learn_vi_p', coef: 1.0 }
            ],
            bnds: { type: glpk.GLP_UP, ub: 0.0, lb: 0.0 }
        },
    ]
}, options);