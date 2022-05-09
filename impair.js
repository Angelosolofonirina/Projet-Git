function ProduitImpair(number){//une fonction qui prend en parametre un nombre
    if(number==1){//C'est la terminaison du fonction recursive
        return 1;
    }
    else{
        return ProduitImpair(number-2)*numbever;//recursivité du fonction
    }
}
console.log(ProduitImpair(9));