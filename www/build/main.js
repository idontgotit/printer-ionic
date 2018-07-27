webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal-page/modal-page.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = /** @class */ (function () {
    function CartPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/python/Working/myApp/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cart\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/home/python/Working/myApp/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fb, modal) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.modal = modal;
        this.toDos = ["Todo1", "Todo2", "Todo3"];
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.employees = ['17-OH-Progesterone',
            'A/G (Tỷ số Albumin/Globulin)',
            'Acetaminophen',
            'Acetyl Cholinesterase (CHE)',
            'Acid Phosphatase',
            'Acid Uric (Blood/Urine)',
            'ACTH ',
            'Active Renin',
            'ADA (Adenosine Deaminase)',
            'Adeno Virus IgG',
            'Adeno Virus IgM',
            'ADH (Anti Diuretic Hormone)',
            'AFP (Alpha - Fetoprotein)',
            'ALA/Urine (Amino Levulinic Acid)',
            'Albumin',
            'Aldosterone',
            'Alkaline Phosphatase (ALP)',
            'Allergy Panel (Bộ dị ứng)',
            'Alpha 1 Antitrypsine',
            'Alpha 2 - Macrolobulin',
            'Alpha TNF (Tumor Necrosis Factor)',
            'ALT / SGPT ',
            'AMA-M2 (Antimitochondrial Ab)',
            'AMH (Anti-Mullerian Hormon)',
            'Amibe/Blood',
            'Amibe/Stool',
            'Amikacin/75',
            'Amoniac - NH3 Blood/Urine',
            'Amphetamin/Urine (test)',
            'Amphetamin/Urine (định lượng)',
            'Amylase (Blood/Urine)',
            'ANA Test (Anti Nuclear Ab)',
            'ANCA Screen (Anti Neutrophil Cytoplasmic Ab)',
            'Androstenedione',
            'Angiostrongylus Cantonensis IgG',
            'Angiostrongylus Cantonensis IgM',
            'Anti Beta2 Glycoprotein IgG',
            'Anti Beta2 Glycoprotein IgM',
            'Anti Cardiolipin IgG',
            'Anti Cardiolipin IgM',
            'Anti CCP ',
            'Anti HAV IgM',
            'Anti HAV Total',
            'Anti HBc Total ',
            'Anti HBc-IgM',
            'Anti HBe',
            'Anti HBs (Đ.lượng, quantitative)',
            'Anti HDV-IgG',
            'Anti HDV-IgM',
            'ANTI HEV-IgG',
            'ANTI HEV-IgM',
            'Anti Mycoplasma Pneumoniae-IgG',
            'Anti Mycoplasma Pneumoniae-IgM',
            'Anti Nucleosome',
            'Anti Phospholipid IgG',
            'Anti Phospholipid IgM',
            'Anti Thrombin III',
            'Anti Thyroglobulin (Anti TG)',
            'Anti TPO (Anti Microsomal) ',
            'Anti-C1q',
            'Anti-Centromer B',
            'Anti-dsDNA (Anti double strand DNA)',
            'Anti-GAD (Glutamic Acid Decarboxylase)',
            'Anti-Histone',
            'Anti-Jo-1',
            'Anti-LKM-1',
            'Anti-RNP-70 (RiboNucleoProtein)',
            'Anti-RNP-Sm',
            'Anti-Scl-70',
            'Anti-Sm',
            'Anti-SS-A',
            'Anti-SS-B',
            'APO Lipoprotein-A1',
            'APO Lipoprotein-B',
            'APTT / TCK',
            'Ascaris lumbricoides IgG',
            'Ascaris lumbricoides IgM',
            'ASO (Quantitative)',
            'Aspergillus-IgG',
            'Aspergillus-IgM',
            'AST / SGOT ',
            'B12 (Vit B12)',
            'Barbiturate/Urine',
            'Benzodiazepine/Urine',
            'Beta 2 Microglobulin ',
            'Beta CrossLaps',
            'Bicarbonat (HCO3)',
            'Bilirubin D',
            'Bilirubin T',
            'BK (TB IgG/IgM)',
            'BK (Tuberculosis) Culture (Cấy + KSĐ)',
            'BK (Tuberculosis) PCR',
            'BK (Tuberculosis)(AFB) nhuộm, soi KHV',
            'Bleeding time & Coagulation time (TS - TC )',
            'Blood gages - khí máu (A.B.G)',
            'C3',
            'C4',
            'CA 125 ',
            'CA 15-3',
            'CA 19-9',
            'CA 72-4 ',
            'Ca Total',
            'Calcitonin (hCT)',
            'Cặn ADDIS ',
            'Candida-IgG',
            'Candida-IgM',
            'Cannabinoids II',
            'Catecholamines (Adrenalin/Noradrenalin/Dopamine)',
            'Cấy + KSĐ',
            'Cấy máu + KSĐ (Blood Culture)',
            'Cấy nấm + KSĐ (Fungus Culture)',
            'Cấy phân + KSĐ (Stool Culture)',
            'CEA ',
            'Ceruloplasmine',
            'Ceton/Blood',
            'Chì máu (Plomb/Lead)',
            'Chì nước tiểu (ALA/urine)',
            'Chlamydia Pneumoniae-IgG',
            'Chlamydia Pneumoniae-IgM',
            'Chlamydia Trachomatis - DNA',
            'Chlamydia Trachomatis Ag',
            'Chlamydia Trachomatis IgG',
            'Chlamydia Trachomatis IgM',
            'Cholesterol Total',
            'CK-MB ',
            'Clonorchis Sinensis IgG',
            'Clonorchis Sinensis IgM',
            'CMV DNA (Realtime - Đ.lượng)',
            'CMV IgG',
            'CMV IgM ',
            'Cocain Metabolic',
            'Công thức máu/Huyết đồ (CBC)',
            'Copeptin',
            'Cortisol (Blood/Urine)',
            'C-Peptid ',
            'CPK',
            'Creatinin (Blood/Urine)',
            'Creatininine Clearance',
            'CRP hs',
            'CRP Total',
            'Cyclosporine ',
            'Cyfra 21-1',
            'Cystatin C',
            'Cysticercose IgG',
            'Cysticercose IgM',
            'D.Dimer ',
            'Dengue Fever-IgG/IgM',
            'Dengue NS1 Ag ',
            'DHEA SO4',
            'Diazepam/Urine',
            'Điện di Hb',
            'Điện di Protein/Máu',
            'Điện di Protein/Nước tiểu',
            'Điện giải đồ (Na+, K+, Ca++)',
            'Điện giải đồ (Na+, K+, CL -)',
            'Digitoxin',
            'Digoxin',
            'Độ lọc cầu thận (eGFR)',
            'Đồng (Copper/Cu)',
            'Đột biến EGFR (EGFR Mutant)',
            'Đột biến gen ung thư vú và buồng trứng (BRCA1, BRCA2, CHEK2)',
            'Double test (PAPP-A, Free Beta HCG)',
            'Drug of Abuse Screen Urine (bộ chẩn đoán thuốc gây nghiện MOP/MDMA/MET/THC)',
            'EA IgG',
            'EBNA IgG (Epstein Barr nuclear antigen)',
            'EBV DNA Realtime',
            'EBV-IgG',
            'EBV-IgM',
            'EBV - VCA  IgA',
            'EBV - VCA  IgG',
            'EBV - VCA  IgM',
            'Echinococcus IgG',
            'Echinococcus IgM ',
            'ENA - Plus (Sceening)',
            'Enterovirus IgG',
            'Enterovirus IgM',
            'Erythropoietin (EPO) Định lượng',
            'Estradiol (E2)',
            'ETOH (Cồn/máu)',
            'EV71 PCR (Bệnh tay chân miệng)',
            'EV71 test (Bệnh tay chân miệng)',
            'Everolimus',
            'Factor V Layden',
            'Fasciola Hepatica/Blood',
            'Ferritin',
            'Fibrinogen ',
            'Filariasis/Blood',
            'FOB (Fecal Occult Blood)',
            'Folate',
            'Free Metanepharine/Blood',
            'Free PSA',
            'Free T3 ',
            'Free T4',
            'Fructosamine ',
            'FSH',
            'G6 - PD',
            'Gamma Interferon',
            'Galectin',
            'Gastrin',
            'Gentamicin',
            'Giải phẫu bệnh - Mô bệnh học',
            'Giải phẫu bệnh - Tế bào',
            'GGT',
            'Globulin',
            'Glucose ',
            'Gnathostoma IgG',
            'Gonorrhea Ag',
            'Haptoglobin',
            'HbA1c',
            'HBeAg',
            'HBeAg Định lượng',
            'HBsAg (Đ.tính, qualitative)',
            'HBsAg Định lượng',
            'HBV DNA Realtime (Đ.lượng)',
            'HBV Genotype ',
            'HCC risk (AFP, AFP-L3, PIVKA II)',
            'HCG Beta (Blood)',
            'HCG/Urine (Đ.lượng)',
            'HCG/Urine (Đ.tính)',
            'HCV Ab',
            'HCV Ag ',
            'HCV Genotype ',
            'HCV RNA Realtime (Đ.lượng)',
            'HDL Cholesterol',
            'HDV Ag',
            'HE 4 (Human Epididymal Protein 4)',
            'Heroin, Morphin/Blood ',
            'Heroin,Morphin/Urine',
            'hGH (human Growth Hormone)',
            'HIV Ag/Ab Combo',
            'HLA B27 định tính',
            'HLA B27 định type',
            'Homocysteine Total',
            'Hồng cầu lưới (Reticulocyte)',
            'HP Ab /Blood',
            'HP Test-IgG',
            'HP Test-IgM',
            'HP-Ag/Stool (EIA)',
            'HPV - Genotype',
            'HSV 1 IgG',
            'HSV 1/2 IgG',
            'HSV 1/2 IgM',
            'HSV 2 IgG',
            'HSV DNA 1,2 REALTIME',
            'ICA (Islet Cell Autoantibody)',
            'IFN (Interferon Gamma)',
            'IgA',
            'IgE Total',
            'IGF-1',
            'IgG',
            'IgM ',
            'IL 17A',
            'Infectious Mononucleosis',
            'Influenza A & B Ag',
            'Influenza Ag A / B / A(H1N1) ',
            'Insulin ',
            'Interleukin 2',
            'Interleukin 6',
            'Japanese Encephalitis-IgG',
            'Japanese Encephalitis-IgM',
            'Kappa',
            'Kẽm (ZINC)',
            'Keton/Urine',
            'Ketone/Blood ',
            'KST Sốt rét (Malaria Antigen P.f, P.v/Blood)',
            'KST Sốt rét (Malaria) Phết lam máu',
            'L 28B',
            'LA (Lupus Anticoagulant)',
            'Lactic Acid (Lactate)',
            'Lambda',
            'LDH Blood',
            'LDL Cholesterol',
            'LE CELLS',
            'Legionella Pneumophila IgG',
            'Legionella Pneumophila IgM',
            'Leptin',
            'Leptospira-IgG',
            'Leptospira-IgM',
            'LH',
            'Lipase/Blood',
            'Lipoprotein (a) Latex',
            'Magnesium (Blood/Urine) ',
            'Marijuana (cannabinoids)/Urine',
            'Máu lắng (ESR,VS)',
            'Melanine/Blood',
            'Melatonin/Saliva',
            'Metanephrine/Blood',
            'Methadone',
            'Methamphetamine Test/Urine',
            'Micro Albumin/Urine ',
            'Mumps IgG',
            'Mumps IgM',
            'Myoglobin',
            'Napa',
            'Neisseria Gonorrhoeae DNA',
            'NGAL (Neutrophil Gelactinase Associated Lipocalin)',
            'Nhiễm sắc thể đồ',
            'Nhóm máu (Blood Group ABO + Rh)',
            'Nhuộm Gram (Gram Stain)',
            'Normetanephrine',
            'NP dung nạp đường (Oral Glucose Tolerance Test)',
            'NSE (Neuron-Specific Enolase)',
            'NT - ProBNP II',
            'Opiates',
            'Osteocalcin',
            'P1NP Total',
            'Pancreatic Amylase',
            'Pap Smear (Tầm soát sớm ung thư cổ tử cung)',
            'Pap ThinPrep (USA)',
            'Pepsinogen1-2',
            'Phân tích mức độ đứt gẫy gen của tinh trùng (Halosperm)',
            'Phân tích sỏi (Stone Analyse : Kidney, Ureter,...) ',
            'Phencyclidine Plus',
            'Phenobarbital Cobas',
            'Phosphatase Acid/Blood',
            'Phosphatase kiềm',
            'Phospholipid',
            'Phosphorus (PO4)',
            'PIGF',
            'Pre Albumin',
            'Pro GRP (Pro Gastrin Releasing Peptide)',
            'Procalcitonin (PCT) ',
            'Procanamide',
            'Progesterone',
            'Prolactine',
            'Propoxyphene',
            'Protein Bence Jones',
            'Protein C',
            'Protein S',
            'Protein Total (Máu/Urine/CFS)',
            'PSA',
            'PT / TQ',
            'PTH',
            'Quinidine',
            'R.P.R (Rapid Plasma Reagin) / VDRL',
            'Reserve Alk (Dự trữ kiềm)',
            'RF (Quantitative)',
            'ROMA Test',
            'Rotavirus/Stool',
            'Rubella IgG',
            'Rubella IgM ',
            'S 100',
            'Salicylate',
            'Sán lá phổi (Paragonimus IgG)',
            'Sàng lọc sơ sinh 3 bệnh (G6PD, CH, CAH)',
            'Sàng lọc sơ sinh 5 bệnh (G6PD, CH, CAH,PKU, GALT)',
            'Sắt (Fe, Iron)',
            'SCC',
            'Schistosoma Mansoni IgG',
            'Sero Amibe',
            'Sero Fasciola Hepatica',
            'Sero Filariasis Ag',
            'sFlt-1',
            'SHBG ',
            'SLE ( Systemic Lupus Erythematosus )',
            'Sởi (Measles-IgG)',
            'Sởi (Measles-IgM)',
            'Soi tươi huyết trắng (nấm, KST, tạp trùng, tế bào thượng bì, hồng cầu, bạch cầu)',
            'Soi tươi dịch',
            'Soi tươi phân (Stool Exam)',
            'Soi tươi tìm nấm (Fungus Exam)',
            'sTfR ',
            'Streptococcus A Ag',
            'Strongyloides stercoralis IgG',
            'T3',
            'T4',
            'Tacrolimus ',
            'Taenia (Cysticercose - IgG)',
            'Testosterone ',
            'TG - Thyroglobulin',
            'Theophylline',
            'Thrombin Time (TT)',
            'TIBC / UIBC',
            'Tinh dịch đồ (SEMEN ANALYSIS)',
            'Tobramycin ',
            'Tổng phân tích nước tiểu (Urinary Analysis)',
            'Toxocara IgG',
            'Toxoplasma Gondii IgG ',
            'Toxoplasma Gondii IgM ',
            'TPHA/Syphilis ',
            'Transferrin',
            'Trichinella Spiralis IgG',
            'Trichinella Spiralis IgM',
            'Triglycerides',
            'Triple Test (AFP, HCG, uE3)',
            'Troponin-I',
            'Troponin-T, hs ',
            'Tryptase (TPS)',
            'TSH',
            'TSH Receptor (TRAb)',
            'Urea / BUN',
            'Vitamin D Total',
            'VLDL Cholesterol',
            'VZV DNA REALTIME',
            'VZV IgG',
            'VZV IgM',
            'Waaler Rose',
            'Widal Test',
        ];
        this.names = [{ Name: 'item-1', Value: false, deleted: false },
            { Name: 'item-2', Value: false, deleted: false }];
        this.form = fb.group({
            country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ;
    HomePage.prototype.delete = function (item) {
        item.deleted = true;
        this.names = this.names.filter(function (it) { return it['deleted'] == false; });
    };
    ;
    HomePage.prototype.add = function () {
        console.log("function called");
        var current_length = this.names.length + 1;
        this.names.push({ Name: 'item-' + current_length, Value: current_length, deleted: false });
    };
    ;
    HomePage.prototype.onChange = function (item) {
        console.log(item.title);
    };
    HomePage.prototype.openModal = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModalData = {
            name: 'Paul Halliday',
            occupation: 'Developer'
        };
        var myModal = this.modal.create('ModalPage', { data: myModalData }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/python/Working/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <form id="home-form3">\n    <!-- <ion-item id="home-input7">\n      <ion-label>\n        Số lượng\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="home-input8">\n      <ion-label>\n        Chiết khấu\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item> -->\n\n    <!-- <div *ngFor="let message of messages">\n      <div *ngFor="let key of objectKeys(message)">\n          <div>KEY: {{ key }}</div>\n          <div *ngFor="let val of message[key]">{{ val.id }}</div>\n      </div>\n  </div> -->\n\n    <!-- <ion-item *ngFor="let name of names" >\n    <ion-label style="width:10px">{{name.Name}} with value {{name.Value}} </ion-label>\n    <button ion-button color="secondary"  (click)="remove(name)" >Remove</button>\n    <ion-item-options side="left">\n        <button ion-button (click)="favorite(item)">Favorite</button>\n        <button ion-button color="danger" (click)="share(item)">Share</button>\n      </ion-item-options>\n  </ion-item> -->\n\n    <!-- <ion-list > -->\n    <!-- <ion-item-sliding *ngFor="let name of names">\n        <ion-item>\n          <ion-label>\n            Số lượng\n          </ion-label>\n          <ion-input type="text" placeholder=""></ion-input>\n        </ion-item>\n        <ion-item style="position: relative;">\n          <ion-label>\n            Chiết khấu\n          </ion-label>\n          <ion-input type="text" placeholder="" type="number" maxlength="3"></ion-input>\n        </ion-item>\n        \n        <ion-item-options >\n          <button ion-button color="danger" (click)="delete(name)">Delete</button>\n        </ion-item-options>\n      </ion-item-sliding> -->\n    <!-- </ion-list> -->\n\n    <ion-item>\n      <ion-label>Employee</ion-label>\n      <ion-select>\n        <ion-option *ngFor="let employee of employees" (ionSelect)="onChange(employee)">{{employee}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <!-- <ion-list [virtualScroll]="employees">\n\n      <ion-item *virtualItem="let item">\n        {{ item.title }}\n      </ion-item>\n    \n    </ion-list> -->\n    <button ion-button (click)="openModal()">Open Modal</button>\n\n    <!-- <button ion-button color="secondary" (click)="add()">Add</button>\n    <button ion-button color="secondary" (click)="delete()">delete</button> -->\n\n  </form>\n</ion-content>'/*ion-inline-end:"/home/python/Working/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__["a" /* CloudPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal-page/modal-page.module#ModalPageModule', name: 'ModalPage', segment: 'modal-page', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__["a" /* CloudPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cart_cart__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToCart = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_cart_cart__["a" /* CartPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/python/Working/myApp/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item1">\n        Home\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToCart()" id="menu-list-item2">\n        Cart\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/python/Working/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloudPage = /** @class */ (function () {
    function CloudPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CloudPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cloud',template:/*ion-inline-start:"/home/python/Working/myApp/src/pages/cloud/cloud.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cloud\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"/home/python/Working/myApp/src/pages/cloud/cloud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CloudPage);
    return CloudPage;
}());

//# sourceMappingURL=cloud.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map