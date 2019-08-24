package br.unirio.tcc.sagui;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import br.unirio.tcc.sagui.dominio.Disciplina;

@Component
public class CmdRunner implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		System.out.println("AlAOALAOALAOAOALAO");
		Disciplina d = new Disciplina("ABC");

	}

}
