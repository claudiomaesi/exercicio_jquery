$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        
        let inputTarefa = $('#tarefa').val();        
        let linha = $(`
            <li>${inputTarefa}</li>
        `);        
        
        $(linha).appendTo(".ul-tarefa");       

        // Limpa o campo
        $('#tarefa').val('');
    });
    
    $(".ul-tarefa").on('click','li',function() {
        $(this).addClass('risco');       
    });
})