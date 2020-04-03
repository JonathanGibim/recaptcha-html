/* ************** */
/* MASCARAS DO FORM */
$('.mask_cpf').mask('000.000.000-00');
$('.mask_tel').mask('(00) 00000-0000');



/* ************** */
/* CAPTCHA DO FORM */
/* Gera int até 5 */
var numero1 = Math.floor(Math.random() * 5 + 1);
/* Gera int até 4 */
var numero2 = Math.floor(Math.random() * 4 + 1);
var soma_correta = numero1+numero2;

/* atribue valores no alerta */
$("#numero1").html(numero1);
$("#numero2").html(numero2);

/* confere se campo digitado é igual a resultado da soma */
function confereCaptcha() {
    soma_form = $("#soma_form").val();
    if(soma_form == soma_correta ){
        $("#alerta-captcha").removeClass('alert-warning');
        $("#alerta-captcha").removeClass('alert-danger');
        $("#alerta-captcha").addClass('alert-success');
        return true;
    }else{
        $("#alerta-captcha").removeClass('alert-warning');
        $("#alerta-captcha").addClass('alert-danger');
    }
}



/* ************** */
/* EXCLUIR ITEM */
function excluir_item(nome_recurso, id_item) {
    swal({
        title: 'Excluir',
        text: 'Tem certeza que deseja excluir este item?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir!',
        cancelButtonText: 'Não',
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false
    }).then((result) => {
        if (result.value) {
            xhr = new XMLHttpRequest();
            xhr.open('DELETE', '/' + nome_recurso + '/' + id_item + '/');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.readyState !== 4) return;
                if (xhr.status === 200) {
                    window.location.reload();
                } else {
                    alert('Erro ' + xhr.status);
                }
            };
            xhr.send();
        }
    });
}