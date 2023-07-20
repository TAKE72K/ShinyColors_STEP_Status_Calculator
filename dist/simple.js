import GLPK from './index.js';
const glpk = await GLPK();



let lp={name:"LP",objective:{direction:glpk.GLP_MAX,name:"obj",vars:[{name:"vi",coef:1}]},subjectTo:[{name:"learn_vi_p_cons",vars:[{name:"vi_p",coef:-1},{name:"learn_vi_p",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"learn_vi_pp_cons",vars:[{name:"vi_pp",coef:-1},{name:"learn_vi_pp",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"learn_vi_ppp_cons",vars:[{name:"vi_ppp",coef:-1},{name:"learn_vi_ppp",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda_cons",vars:[{name:"viup_lambda0",coef:1},{name:"viup_lambda1",coef:1},{name:"viup_lambda2",coef:1},{name:"viup_lambda3",coef:1},{name:"viup_lambda4",coef:1},{name:"viup_lambda5",coef:1},{name:"viup_lambda6",coef:1}],bnds:{type:glpk.GLP_FX,ub:1,lb:1}},{name:"viup_delta_cons",vars:[{name:"viup_delta0",coef:1},{name:"viup_delta1",coef:1},{name:"viup_delta2",coef:1},{name:"viup_delta3",coef:1},{name:"viup_delta4",coef:1},{name:"viup_delta5",coef:1}],bnds:{type:glpk.GLP_FX,ub:1,lb:1}},{name:"def_vi_up_value",vars:[{name:"vi_up",coef:1},{name:"viup_lambda1",coef:-30},{name:"viup_lambda2",coef:-60},{name:"viup_lambda3",coef:-90},{name:"viup_lambda4",coef:-120},{name:"viup_lambda5",coef:-150},{name:"viup_lambda6",coef:-230}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"def_vi_up_cost",vars:[{name:"viup_pt",coef:1},{name:"viup_lambda1",coef:-300},{name:"viup_lambda2",coef:-750},{name:"viup_lambda3",coef:-1350},{name:"viup_lambda4",coef:-2250},{name:"viup_lambda5",coef:-3450},{name:"viup_lambda6",coef:-7450}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"def_vi_up_te_cost",vars:[{name:"viup_te",coef:1},{name:"viup_lambda3",coef:-30},{name:"viup_lambda4",coef:-90},{name:"viup_lambda5",coef:-180},{name:"viup_lambda6",coef:-500}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"viup_lambda0_leq_viup_delta0",vars:[{name:"viup_lambda0",coef:1},{name:"viup_delta0",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda1_leq_viup_delta0_1",vars:[{name:"viup_lambda1",coef:1},{name:"viup_delta0",coef:-1},{name:"viup_delta1",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda2_leq_viup_delta1_2",vars:[{name:"viup_lambda2",coef:1},{name:"viup_delta1",coef:-1},{name:"viup_delta2",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda3_leq_viup_delta2_3",vars:[{name:"viup_lambda3",coef:1},{name:"viup_delta2",coef:-1},{name:"viup_delta3",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda4_leq_viup_delta3_4",vars:[{name:"viup_lambda4",coef:1},{name:"viup_delta3",coef:-1},{name:"viup_delta4",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda5_leq_viup_delta4_5",vars:[{name:"viup_lambda5",coef:1},{name:"viup_delta4",coef:-1},{name:"viup_delta5",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"viup_lambda6_leq_viup_delta5",vars:[{name:"viup_lambda6",coef:1},{name:"viup_delta5",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vi_pt_limit",vars:[{name:"vi_pt_origin",coef:-1},{name:"viup_pt",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"te_pt_limit",vars:[{name:"te_pt_origin",coef:-1},{name:"viup_te",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vilup_lambda_cons",vars:[{name:"vilup_lambda0",coef:1},{name:"vilup_lambda1",coef:1},{name:"vilup_lambda2",coef:1},{name:"vilup_lambda3",coef:1},{name:"vilup_lambda4",coef:1},{name:"vilup_lambda5",coef:1}],bnds:{type:glpk.GLP_FX,ub:1,lb:1}},{name:"vilup_delta_cons",vars:[{name:"vilup_delta0",coef:1},{name:"vilup_delta1",coef:1},{name:"vilup_delta2",coef:1},{name:"vilup_delta3",coef:1},{name:"vilup_delta4",coef:1}],bnds:{type:glpk.GLP_FX,ub:1,lb:1}},{name:"vilup_lambda0_leq_vilup_delta0",vars:[{name:"vilup_lambda0",coef:1},{name:"vilup_delta0",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vilup_lambda1_leq_vilup_delta0_1",vars:[{name:"vilup_lambda1",coef:1},{name:"vilup_delta0",coef:-1},{name:"vilup_delta1",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vilup_lambda2_leq_vilup_delta1_2",vars:[{name:"vilup_lambda2",coef:1},{name:"vilup_delta1",coef:-1},{name:"vilup_delta2",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vilup_lambda3_leq_vilup_delta2_3",vars:[{name:"vilup_lambda3",coef:1},{name:"vilup_delta2",coef:-1},{name:"vilup_delta3",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vilup_lambda4_leq_vilup_delta3_4",vars:[{name:"vilup_lambda4",coef:1},{name:"vilup_delta3",coef:-1},{name:"vilup_delta4",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vilup_lambda5_leq_vilup_delta4",vars:[{name:"vilup_lambda5",coef:1},{name:"vilup_delta4",coef:-1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"vil_cal",vars:[{name:"vi_l_up",coef:1},{name:"vilup_lambda1",coef:-30},{name:"vilup_lambda2",coef:-60},{name:"vilup_lambda3",coef:-90},{name:"vilup_lambda4",coef:-120},{name:"vilup_lambda5",coef:-140}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"vil_vipt_cal",vars:[{name:"vilup_pt",coef:1},{name:"vilup_lambda1",coef:-300},{name:"vilup_lambda2",coef:-750},{name:"vilup_lambda3",coef:-1350},{name:"vilup_lambda4",coef:-2250},{name:"vilup_lambda5",coef:-3050}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"vil_tept_cal",vars:[{name:"vilup_te",coef:1},{name:"vilup_lambda3",coef:-30},{name:"vilup_lambda4",coef:-90},{name:"vilup_lambda5",coef:-150}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"sp_cost_constraint_for_limit_up",vars:[{name:"learn_p_skill",coef:-140},{name:"learn_s0_skill",coef:-140},{name:"learn_s1_skill",coef:-140},{name:"learn_s2_skill",coef:-140},{name:"learn_s3_skill",coef:-140},{name:"learn_s4_skill",coef:-140},{name:"sp_cost",coef:1}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"total_sp_constraint",vars:[{name:"sp_origin",coef:-1},{name:"te2sp",coef:-10},{name:"all2sp",coef:-10},{name:"preserve_sp",coef:1},{name:"sp_cost",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"visual_status_cal",vars:[{name:"vi_origin",coef:-1},{name:"vi",coef:1},{name:"vi_up",coef:-10}],bnds:{type:glpk.GLP_FX,ub:0,lb:0}},{name:"visual_status_limit",vars:[{name:"vi_limit_origin",coef:-1},{name:"vi",coef:1},{name:"vi_l_up",coef:-10},{name:"learn_vi_p",coef:-50},{name:"learn_vi_pp",coef:-75},{name:"learn_vi_ppp",coef:-100},{name:"learn_p_skill",coef:-200},{name:"learn_s0_skill",coef:-175},{name:"learn_s1_skill",coef:-200},{name:"learn_s2_skill",coef:-175},{name:"learn_s3_skill",coef:-100},{name:"learn_s4_skill",coef:-100}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"visual_pt_constraint",vars:[{name:"vi_pt_origin",coef:-1},{name:"all2sp",coef:20},{name:"learn_vi_p",coef:60},{name:"learn_vi_pp",coef:100},{name:"learn_vi_ppp",coef:150},{name:"preserve_vi",coef:1},{name:"viup_pt",coef:1},{name:"vilup_pt",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"mental_pt_constraint",vars:[{name:"me_pt_origin",coef:-1},{name:"all2sp",coef:20},{name:"preserve_me",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}},{name:"teamwork_pt_constraint",vars:[{name:"te_pt_origin",coef:-1},{name:"te2sp",coef:30},{name:"preserve_te",coef:1},{name:"viup_te",coef:1},{name:"vilup_te",coef:1}],bnds:{type:glpk.GLP_UP,ub:0,lb:0}}],bounds:[{name:"me_pt_origin",type:glpk.GLP_FX,ub:214,lb:214},{name:"sp_origin",type:glpk.GLP_FX,ub:325,lb:325},{name:"vi_pt_origin",type:glpk.GLP_FX,ub:9309,lb:9309},{name:"te_pt_origin",type:glpk.GLP_FX,ub:1381,lb:1381},{name:"vi_origin",type:glpk.GLP_FX,ub:866,lb:866},{name:"vi_limit_origin",type:glpk.GLP_FX,ub:822,lb:822},{name:"vi",type:glpk.GLP_DB,ub:1e5,lb:10},{name:"vi_up",type:glpk.GLP_DB,ub:230,lb:0},{name:"vi_l_up",type:glpk.GLP_DB,ub:140,lb:30},{name:"te2sp",type:glpk.GLP_DB,ub:1e5,lb:0},{name:"all2sp",type:glpk.GLP_DB,ub:1e5,lb:0},{name:"vi_p",type:glpk.GLP_FX,ub:0,lb:0},{name:"vi_pp",type:glpk.GLP_FX,ub:0,lb:0},{name:"vi_ppp",type:glpk.GLP_FX,ub:0,lb:0},{name:"learn_vi_p",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_vi_pp",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_vi_ppp",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_p_skill",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_s0_skill",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_s1_skill",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_s2_skill",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_s3_skill",type:glpk.GLP_DB,ub:1,lb:0},{name:"learn_s4_skill",type:glpk.GLP_DB,ub:1,lb:0},{name:"preserve_sp",type:glpk.GLP_FX,ub:0,lb:0},{name:"preserve_vi",type:glpk.GLP_FX,ub:0,lb:0},{name:"preserve_te",type:glpk.GLP_FX,ub:0,lb:0},{name:"preserve_me",type:glpk.GLP_FX,ub:0,lb:0},{name:"viup_pt",type:glpk.GLP_DB,ub:1e5,lb:0},{name:"viup_te",type:glpk.GLP_DB,ub:1e5,lb:0},{name:"viup_lambda0",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_lambda1",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_lambda2",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_lambda3",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_lambda4",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_lambda5",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_lambda6",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_delta0",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_delta1",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_delta2",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_delta3",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_delta4",type:glpk.GLP_DB,ub:1,lb:0},{name:"viup_delta5",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_pt",type:glpk.GLP_DB,ub:1e5,lb:0},{name:"vilup_te",type:glpk.GLP_DB,ub:1e5,lb:0},{name:"vilup_lambda0",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_lambda1",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_lambda2",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_lambda3",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_lambda4",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_lambda5",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_delta0",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_delta1",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_delta2",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_delta3",type:glpk.GLP_DB,ub:1,lb:0},{name:"vilup_delta4",type:glpk.GLP_DB,ub:1,lb:0},{name:"sp_cost",type:glpk.GLP_DB,ub:1e5,lb:0}],binaries:["learn_vi_p","learn_vi_pp","learn_vi_ppp","learn_p_skill","learn_s0_skill","learn_s1_skill","learn_s2_skill","learn_s3_skill","learn_s4_skill","viup_delta0","viup_delta1","viup_delta2","viup_delta3","viup_delta4","viup_delta5","vilup_delta0","vilup_delta1","vilup_delta2","vilup_delta3","vilup_delta4"],generals:["me_pt_origin","sp_origin","vi_pt_origin","te_pt_origin","vi_origin","vi_limit_origin","vi","vi_up","vi_l_up","te2sp","all2sp","vi_p","vi_pp","vi_ppp","preserve_sp","preserve_vi","preserve_te","preserve_me","viup_pt","viup_te","vilup_pt","vilup_te","sp_cost"]};


function setLP(n,id){
	let v=document.getElementById(n).value;
	if(n=='vi_p' | n=='vi_pp' | n=='vi_ppp'){
		let check=document.getElementById(n).checked;
		if (check){
			lp.bounds[id].ub=1;
			lp.bounds[id].lb=1;
		}else{
			lp.bounds[id].ub=0;
			lp.bounds[id].lb=0;
		}

	}
	else if(v>0){
		lp.bounds[id].ub=v;
		lp.bounds[id].lb=v;
	}else{
		if(n=='vi_origin') {v=10;}
		else if(n=='vi_limit_origin') {v=500;}
		else {v=0;}


		lp.bounds[id].ub=v;
		lp.bounds[id].lb=v;
	}
};

document.getElementById("calculate").onclick = function() {
    calculate();
};

function calculate(){
	setLP('me_pt_origin',0);
	setLP('sp_origin',1);
	setLP('vi_pt_origin',2);
	setLP('te_pt_origin',3);
	setLP('vi_origin',4);
	setLP('vi_limit_origin',5);
	setLP('vi_p',11);
	setLP('vi_pp',12);
	setLP('vi_ppp',13);
	setLP('preserve_sp',23);
	setLP('preserve_vi',24);
	setLP('preserve_te',25);
	setLP('preserve_me',26);

	let vi_up_origin=document.getElementById('vi_up_origin').value;
	let vi_l_origin=document.getElementById('vi_l_origin').value;

	let vi_pt_restore=0;
	let te_pt_restore=0;
	if (vi_up_origin > 150){
    	vi_pt_restore += (vi_up_origin - 150) * 50 + 3450;
    	te_pt_restore += (vi_up_origin - 150) * 4 + 180;}
	else if( vi_up_origin > 120){
   		vi_pt_restore += (vi_up_origin - 120) * 40 + 2250;
    	te_pt_restore += (vi_up_origin - 120) * 3 + 90;}
	else if (vi_up_origin > 90){
    	vi_pt_restore += (vi_up_origin - 90) * 30 + 1350;
    	te_pt_restore += (vi_up_origin - 90) * 2 + 30;}
	else if (vi_up_origin > 60){
    	vi_pt_restore += (vi_up_origin - 60) * 20 + 750;
    	te_pt_restore += (vi_up_origin - 60) * 1;}
	else if (vi_up_origin > 30){vi_pt_restore += (vi_up_origin - 30) * 15 + 300;}
	else{vi_pt_restore += vi_up_origin * 10;}


	if (vi_l_origin > 120){
    	vi_pt_restore += (vi_l_origin - 120) * 40 + 2250;
    	te_pt_restore += (vi_l_origin - 120) * 3 + 90;}
	else if (vi_l_origin > 90){
    	vi_pt_restore += (vi_l_origin - 90) * 30 + 1350;
    	te_pt_restore += (vi_l_origin - 90) * 2 + 30;}
	else if (vi_l_origin > 60){
    	vi_pt_restore += (vi_l_origin - 60) * 20 + 750;
    	te_pt_restore += (vi_l_origin - 60) * 1;}
	else if (vi_l_origin > 30){vi_pt_restore += (vi_l_origin - 30) * 15 + 300;}
	else{vi_pt_restore += vi_l_origin * 10;}

    console.log(Number(lp.bounds[2].ub)+vi_pt_restore);
    lp.bounds[2].ub=Number(lp.bounds[2].ub)+vi_pt_restore;
	lp.bounds[2].lb=Number(lp.bounds[2].lb)+vi_pt_restore;
    lp.bounds[3].ub=Number(lp.bounds[3].ub)+te_pt_restore;
	lp.bounds[3].lb=Number(lp.bounds[3].lb)+te_pt_restore;
    lp.bounds[4].ub=Number(lp.bounds[4].ub)-vi_up_origin*10;
	lp.bounds[4].lb=Number(lp.bounds[4].lb)-vi_up_origin*10;
    lp.bounds[5].ub=Number(lp.bounds[5].ub)-vi_l_origin*10;
	lp.bounds[5].lb=Number(lp.bounds[5].lb)-vi_l_origin*10;

	lp.bounds[7].lb=vi_up_origin;
	lp.bounds[8].lb=vi_l_origin;

	//set constraint coef

	//sp_cost_constraint_for_limit_up 28
	let p_sp=document.getElementById('p_sp').value;
	let s0_sp=document.getElementById('s0_sp').value;
	let s1_sp=document.getElementById('s1_sp').value;
	let s2_sp=document.getElementById('s2_sp').value;
	let s3_sp=document.getElementById('s3_sp').value;
	let s4_sp=document.getElementById('s4_sp').value;

	lp.subjectTo[28].vars[0].coef=-1*p_sp;
	lp.subjectTo[28].vars[1].coef=-1*s0_sp;
	lp.subjectTo[28].vars[2].coef=-1*s1_sp;
	lp.subjectTo[28].vars[3].coef=-1*s2_sp;
	lp.subjectTo[28].vars[4].coef=-1*s3_sp;
	lp.subjectTo[28].vars[5].coef=-1*s4_sp;
	//visual_status_limit 31
	let p_l=document.getElementById('p_l').value;
	let s0_l=document.getElementById('s0_l').value;
	let s1_l=document.getElementById('s1_l').value;
	let s2_l=document.getElementById('s2_l').value;
	let s3_l=document.getElementById('s3_l').value;
	let s4_l=document.getElementById('s4_l').value;
	lp.subjectTo[31].vars[6].coef=-1*p_l;
	lp.subjectTo[31].vars[7].coef=-1*s0_l;
	lp.subjectTo[31].vars[8].coef=-1*s1_l;
	lp.subjectTo[31].vars[9].coef=-1*s2_l;
	lp.subjectTo[31].vars[10].coef=-1*s3_l;
	lp.subjectTo[31].vars[11].coef=-1*s4_l;


	console.log("calculate status");




	glpk.solve(lp, glpk.GLP_MSG_OFF).then(res=>display(res));


};
function display(res){
	console.log(res);
	let ans=res.result.vars;
	document.getElementById('vi').textContent=ans.vi;
	document.getElementById('vi_up').textContent=ans.vi_up;
	document.getElementById('vi_l_up').textContent=ans.vi_l_up;
	document.getElementById('te2sp').textContent=ans.te2sp;
	document.getElementById('all2sp').textContent=ans.all2sp;
	document.getElementById('learn_vi_p').textContent=ans.learn_vi_p?'yes':'no';
	document.getElementById('learn_vi_pp').textContent=ans.learn_vi_pp?'yes':'no';
	document.getElementById('learn_vi_ppp').textContent=ans.learn_vi_ppp?'yes':'no';
	document.getElementById('learn_p_skill').textContent=ans.learn_p_skill?'yes':'no';
	document.getElementById('learn_s0_skill').textContent=ans.learn_s0_skill?'yes':'no';
	document.getElementById('learn_s1_skill').textContent=ans.learn_s1_skill?'yes':'no';
	document.getElementById('learn_s2_skill').textContent=ans.learn_s2_skill?'yes':'no';
	document.getElementById('learn_s3_skill').textContent=ans.learn_s3_skill?'yes':'no';
	document.getElementById('learn_s4_skill').textContent=ans.learn_s4_skill?'yes':'no';
};