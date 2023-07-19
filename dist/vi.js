const GLPK = require('./glpk.js');
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
        vars: [{
            name: 'vi',
            coef: 1
        }]
    },
    subjectTo: [{
            name: 'learn_vi_p_cons',
            vars: [{
                    name: 'vi_p',
                    coef: -1.000000
                },
                {
                    name: 'learn_vi_p',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'learn_vi_pp_cons',
            vars: [{
                    name: 'vi_pp',
                    coef: -1.000000
                },
                {
                    name: 'learn_vi_pp',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'learn_vi_ppp_cons',
            vars: [{
                    name: 'vi_ppp',
                    coef: -1.000000
                },
                {
                    name: 'learn_vi_ppp',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda_cons',
            vars: [{
                    name: 'viup_lambda0',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda1',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda2',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda3',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda4',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda5',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda6',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 1.000000,
                lb: 1.000000
            }
        },
        {
            name: 'viup_delta_cons',
            vars: [{
                    name: 'viup_delta0',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta1',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta2',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta3',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta4',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta5',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 1.000000,
                lb: 1.000000
            }
        },
        {
            name: 'def_vi_up_value',
            vars: [{
                    name: 'vi_up',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda1',
                    coef: -30.000000
                },
                {
                    name: 'viup_lambda2',
                    coef: -60.000000
                },
                {
                    name: 'viup_lambda3',
                    coef: -90.000000
                },
                {
                    name: 'viup_lambda4',
                    coef: -120.000000
                },
                {
                    name: 'viup_lambda5',
                    coef: -150.000000
                },
                {
                    name: 'viup_lambda6',
                    coef: -230.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'def_vi_up_cost',
            vars: [{
                    name: 'viup_pt',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda1',
                    coef: -300.000000
                },
                {
                    name: 'viup_lambda2',
                    coef: -750.000000
                },
                {
                    name: 'viup_lambda3',
                    coef: -1350.000000
                },
                {
                    name: 'viup_lambda4',
                    coef: -2250.000000
                },
                {
                    name: 'viup_lambda5',
                    coef: -3450.000000
                },
                {
                    name: 'viup_lambda6',
                    coef: -7450.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'def_vi_up_te_cost',
            vars: [{
                    name: 'viup_te',
                    coef: 1.000000
                },
                {
                    name: 'viup_lambda3',
                    coef: -30.000000
                },
                {
                    name: 'viup_lambda4',
                    coef: -90.000000
                },
                {
                    name: 'viup_lambda5',
                    coef: -180.000000
                },
                {
                    name: 'viup_lambda6',
                    coef: -500.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda0_leq_viup_delta0',
            vars: [{
                    name: 'viup_lambda0',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta0',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda1_leq_viup_delta0_1',
            vars: [{
                    name: 'viup_lambda1',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta0',
                    coef: -1.000000
                },
                {
                    name: 'viup_delta1',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda2_leq_viup_delta1_2',
            vars: [{
                    name: 'viup_lambda2',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta1',
                    coef: -1.000000
                },
                {
                    name: 'viup_delta2',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda3_leq_viup_delta2_3',
            vars: [{
                    name: 'viup_lambda3',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta2',
                    coef: -1.000000
                },
                {
                    name: 'viup_delta3',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda4_leq_viup_delta3_4',
            vars: [{
                    name: 'viup_lambda4',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta3',
                    coef: -1.000000
                },
                {
                    name: 'viup_delta4',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda5_leq_viup_delta4_5',
            vars: [{
                    name: 'viup_lambda5',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta4',
                    coef: -1.000000
                },
                {
                    name: 'viup_delta5',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'viup_lambda6_leq_viup_delta5',
            vars: [{
                    name: 'viup_lambda6',
                    coef: 1.000000
                },
                {
                    name: 'viup_delta5',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vi_pt_limit',
            vars: [{
                    name: 'vi_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'viup_pt',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'te_pt_limit',
            vars: [{
                    name: 'te_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'viup_te',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vilup_lambda_cons',
            vars: [{
                    name: 'vilup_lambda0',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda1',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda2',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda3',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda4',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda5',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 1.000000,
                lb: 1.000000
            }
        },
        {
            name: 'vilup_delta_cons',
            vars: [{
                    name: 'vilup_delta0',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta1',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta2',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta3',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta4',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 1.000000,
                lb: 1.000000
            }
        },
        {
            name: 'vilup_lambda0_leq_vilup_delta0',
            vars: [{
                    name: 'vilup_lambda0',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta0',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vilup_lambda1_leq_vilup_delta0_1',
            vars: [{
                    name: 'vilup_lambda1',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta0',
                    coef: -1.000000
                },
                {
                    name: 'vilup_delta1',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vilup_lambda2_leq_vilup_delta1_2',
            vars: [{
                    name: 'vilup_lambda2',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta1',
                    coef: -1.000000
                },
                {
                    name: 'vilup_delta2',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vilup_lambda3_leq_vilup_delta2_3',
            vars: [{
                    name: 'vilup_lambda3',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta2',
                    coef: -1.000000
                },
                {
                    name: 'vilup_delta3',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vilup_lambda4_leq_vilup_delta3_4',
            vars: [{
                    name: 'vilup_lambda4',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta3',
                    coef: -1.000000
                },
                {
                    name: 'vilup_delta4',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vilup_lambda5_leq_vilup_delta4',
            vars: [{
                    name: 'vilup_lambda5',
                    coef: 1.000000
                },
                {
                    name: 'vilup_delta4',
                    coef: -1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vil_cal',
            vars: [{
                    name: 'vi_l_up',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda1',
                    coef: -30.000000
                },
                {
                    name: 'vilup_lambda2',
                    coef: -60.000000
                },
                {
                    name: 'vilup_lambda3',
                    coef: -90.000000
                },
                {
                    name: 'vilup_lambda4',
                    coef: -120.000000
                },
                {
                    name: 'vilup_lambda5',
                    coef: -140.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vil_vipt_cal',
            vars: [{
                    name: 'vilup_pt',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda1',
                    coef: -300.000000
                },
                {
                    name: 'vilup_lambda2',
                    coef: -750.000000
                },
                {
                    name: 'vilup_lambda3',
                    coef: -1350.000000
                },
                {
                    name: 'vilup_lambda4',
                    coef: -2250.000000
                },
                {
                    name: 'vilup_lambda5',
                    coef: -3050.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vil_tept_cal',
            vars: [{
                    name: 'vilup_te',
                    coef: 1.000000
                },
                {
                    name: 'vilup_lambda3',
                    coef: -30.000000
                },
                {
                    name: 'vilup_lambda4',
                    coef: -90.000000
                },
                {
                    name: 'vilup_lambda5',
                    coef: -150.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'sp_cost_constraint_for_limit_up',
            vars: [{
                    name: 'learn_s0_skill',
                    coef: -140.000000
                },
                {
                    name: 'learn_s1_skill',
                    coef: -140.000000
                },
                {
                    name: 'learn_s2_skill',
                    coef: -140.000000
                },
                {
                    name: 'learn_s3_skill',
                    coef: -140.000000
                },
                {
                    name: 'learn_s4_skill',
                    coef: -140.000000
                },
                {
                    name: 'sp_cost',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'total_sp_constraint',
            vars: [{
                    name: 'sp_origin',
                    coef: -1.000000
                },
                {
                    name: 'te2sp',
                    coef: -10.000000
                },
                {
                    name: 'all2sp',
                    coef: -10.000000
                },
                {
                    name: 'preserve_sp',
                    coef: 1.000000
                },
                {
                    name: 'sp_cost',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'visual_status_cal',
            vars: [{
                    name: 'vi_origin',
                    coef: -1.000000
                },
                {
                    name: 'vi',
                    coef: 1.000000
                },
                {
                    name: 'vi_up',
                    coef: -10.000000
                },
            ],
            bnds: {
                type: glpk.GLP_FX,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'visual_status_limit',
            vars: [{
                    name: 'vi_limit_origin',
                    coef: -1.000000
                },
                {
                    name: 'vi',
                    coef: 1.000000
                },
                {
                    name: 'vi_l_up',
                    coef: -10.000000
                },
                {
                    name: 'learn_vi_p',
                    coef: -50.000000
                },
                {
                    name: 'learn_vi_pp',
                    coef: -75.000000
                },
                {
                    name: 'learn_vi_ppp',
                    coef: -100.000000
                },
                {
                    name: 'learn_s0_skill',
                    coef: -100.000000
                },
                {
                    name: 'learn_s1_skill',
                    coef: -175.000000
                },
                {
                    name: 'learn_s2_skill',
                    coef: -175.000000
                },
                {
                    name: 'learn_s3_skill',
                    coef: -150.000000
                },
                {
                    name: 'learn_s4_skill',
                    coef: -100.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'vocal_pt_constraint',
            vars: [{
                    name: 'vo_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'all2sp',
                    coef: 20.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'dance_pt_constraint',
            vars: [{
                    name: 'da_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'all2sp',
                    coef: 20.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'visual_pt_constraint',
            vars: [{
                    name: 'vi_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'all2sp',
                    coef: 20.000000
                },
                {
                    name: 'learn_vi_p',
                    coef: 60.000000
                },
                {
                    name: 'learn_vi_pp',
                    coef: 100.000000
                },
                {
                    name: 'learn_vi_ppp',
                    coef: 150.000000
                },
                {
                    name: 'viup_pt',
                    coef: 1.000000
                },
                {
                    name: 'vilup_pt',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'mental_pt_constraint',
            vars: [{
                    name: 'me_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'all2sp',
                    coef: 20.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
        {
            name: 'teamwork_pt_constraint',
            vars: [{
                    name: 'te_pt_origin',
                    coef: -1.000000
                },
                {
                    name: 'te2sp',
                    coef: 30.000000
                },
                {
                    name: 'viup_te',
                    coef: 1.000000
                },
                {
                    name: 'vilup_te',
                    coef: 1.000000
                },
            ],
            bnds: {
                type: glpk.GLP_UP,
                ub: 0.000000,
                lb: 0.000000
            }
        },
    ],
    bounds: [{
            name: 'vo_pt_origin',
            type: glpk.GLP_FX,
            ub: 971,
            lb: 971
        },
        {
            name: 'da_pt_origin',
            type: glpk.GLP_FX,
            ub: 1062,
            lb: 1062
        },
        {
            name: 'me_pt_origin',
            type: glpk.GLP_FX,
            ub: 98,
            lb: 98
        },
        {
            name: 'sp_origin',
            type: glpk.GLP_FX,
            ub: 24,
            lb: 24
        },
        {
            name: 'vi_pt_origin',
            type: glpk.GLP_FX,
            ub: 4291,
            lb: 4291
        },
        {
            name: 'te_pt_origin',
            type: glpk.GLP_FX,
            ub: 1102,
            lb: 1102
        },
        {
            name: 'vi_origin',
            type: glpk.GLP_FX,
            ub: 716,
            lb: 716
        },
        {
            name: 'vi_limit_origin',
            type: glpk.GLP_FX,
            ub: 1186,
            lb: 1186
        },
        {
            name: 'vi',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 10
        },
        {
            name: 'vi_up',
            type: glpk.GLP_DB,
            ub: 230,
            lb: 1
        },
        {
            name: 'vi_l_up',
            type: glpk.GLP_DB,
            ub: 140,
            lb: 30
        },
        {
            name: 'te2sp',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
        {
            name: 'all2sp',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
        {
            name: 'vi_p',
            type: glpk.GLP_FX,
            ub: 1,
            lb: 1
        },
        {
            name: 'vi_pp',
            type: glpk.GLP_FX,
            ub: 0,
            lb: 0
        },
        {
            name: 'vi_ppp',
            type: glpk.GLP_FX,
            ub: 0,
            lb: 0
        },
        {
            name: 'learn_vi_p',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_vi_pp',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_vi_ppp',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_p_skill',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_s0_skill',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_s1_skill',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_s2_skill',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_s3_skill',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'learn_s4_skill',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'preserve_sp',
            type: glpk.GLP_FX,
            ub: 140,
            lb: 140
        },
        {
            name: 'viup_pt',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
        {
            name: 'viup_te',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
        {
            name: 'viup_lambda0',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_lambda1',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_lambda2',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_lambda3',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_lambda4',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_lambda5',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_lambda6',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_delta0',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_delta1',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_delta2',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_delta3',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_delta4',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'viup_delta5',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_pt',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
        {
            name: 'vilup_te',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
        {
            name: 'vilup_lambda0',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_lambda1',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_lambda2',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_lambda3',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_lambda4',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_lambda5',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_delta0',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_delta1',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_delta2',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_delta3',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'vilup_delta4',
            type: glpk.GLP_DB,
            ub: 1,
            lb: 0
        },
        {
            name: 'sp_cost',
            type: glpk.GLP_DB,
            ub: 100000,
            lb: 0
        },
    ],
    binaries: [
        'learn_vi_p',
        'learn_vi_pp',
        'learn_vi_ppp',
        'learn_p_skill',
        'learn_s0_skill',
        'learn_s1_skill',
        'learn_s2_skill',
        'learn_s3_skill',
        'learn_s4_skill',
        'viup_delta0',
        'viup_delta1',
        'viup_delta2',
        'viup_delta3',
        'viup_delta4',
        'viup_delta5',
        'vilup_delta0',
        'vilup_delta1',
        'vilup_delta2',
        'vilup_delta3',
        'vilup_delta4',
    ],
    generals: [
        'vo_pt_origin',
        'da_pt_origin',
        'me_pt_origin',
        'sp_origin',
        'vi_pt_origin',
        'te_pt_origin',
        'vi_origin',
        'vi_limit_origin',
        'vi',
        'vi_up',
        'vi_l_up',
        'te2sp',
        'all2sp',
        'vi_p',
        'vi_pp',
        'vi_ppp',
        'preserve_sp',
        'viup_pt',
        'viup_te',
        'vilup_pt',
        'vilup_te',
        'sp_cost',
    ],


}, options);