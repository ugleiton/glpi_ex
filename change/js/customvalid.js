/*funcoes customizadas ugleiton*/

function isValid(){
    var isVal = true;

    var status = $("select[name='status']").val();
    //aguardando terceiro
    if (status==12){
        //verificar se existe fornecedor informado...
        if (($("img[title='Fornecedor']").length == 0 && $("select[name='_itil_assign[suppliers_id]']").val() == undefined) || $("select[name='_itil_assign[suppliers_id]']").val() == 0){
            alert("Informe um fornecedor")
            isVal = false;
            //colocando evento ao selecionar fornecedor
            if ($("img[title='Fornecedor']").length == 0 && $("select[name='_itil_assign[suppliers_id]']").val() == undefined){
                //mostrar divs de atores
                $("div[id^='itilactor']").show();
                //mostrar div fornecedor
                console.log('Carregando fornecedores');
                $("select[name='_itil_assign[_type]'").val("supplier").change();
                //colocando evento ao escolher fornecedor
                setTimeout(() => {
                    console.log('Adicionando evento ao fornecedor');
                    $("select[name='_itil_assign[suppliers_id]']").on("change",function(e){
                        checkSave();
                    }); 
                }, 3000);
            }
        }
    }
    if ($("select[name='itilcategories_id']").val()==0){
        alert("Informe a categoria do chamado")
        isVal = false;
    }
    return isVal;
}


function checkSave(){
    if (!isValid()){
        $("input[name='update']").prop('disabled', true).css("background-color","#8d8b87").css("color","#ffffff");
    }else{
        $("input[name='update']").prop('disabled', false).removeAttr("style");
    }
}

setTimeout(() => {
    console.log('Configurando validações customizadas...');
    //evento ao selecionar status
    $("select[name='status']").on("change",function(e){
        checkSave();
    }); 

    //evento ao selecionar categoria
    $("select[name='itilcategories_id']").on("change",function(e){
        checkSave();
    }); 
}, 2000);