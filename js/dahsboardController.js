class UserController {


    addLine(dataDahsboard) {

        let tr = document.createElement('tr');

        tr.dataset.user = JSON.stringify(dataDahsboard);

        tr.innerHTML = `
            <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.matricula}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.serie}</td>
            <td>${aluno.celular}</td>
            <td>${aluno.email}</td>
            </tr>
        `;

        this.tableEl.appendChild(tr);

        this.updateCount()

    }

    updateCount() {

        let numberAlunos = 0;
        let numberFuncionario = 0;
        let numberEmprestimo = 0;
        let numberEditoras = 0;
        let numberLivros = 0;

        
        
        [...this.tableEl.children].forEach(tr => {

            numberAlunos++;
            numberFuncionario++;
            numberEmprestimo++;
            numberEditoras++;
            numberLivros++;

            let user = JSON.parse(tr.dataset.user);

            if (user._admin) numberAdmin++;
        })

        document.querySelector("#number-alunos").innerHTML = numberAlunos;
        document.querySelector("#number-funcionario").innerHTML = numberFuncionario;
        document.querySelector("#number-emprestimo").innerHTML = numberEmprestimo;
        document.querySelector("#number-editoras").innerHTML = numberEditoras;
        document.querySelector("#number-livros").innerHTML = numberLivros;

    }
}