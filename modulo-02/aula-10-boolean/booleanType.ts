// exemplo 1
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

//exemplo 2

let concluido: boolean = false;

if (concluido){
    console.log('Tarefa concluída com sucesso');
}
    else{
        console.log('Tarefa Pendente');
    }
    // entra no else porque quando passamos concluido como condição, ele diz se é verdadeiro. Como concluido recebeu "false", ele entra no else. É necessário usar o "NOT (!), para esse condicional, usando a lógica. "