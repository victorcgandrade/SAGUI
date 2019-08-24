package br.unirio.tcc.sagui.dominio;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
public @Data class Disciplina {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;

	/**
	 * Contém o código do curso.
	 */
	@Column
	private final String codigo;

	/**
	 * Contrutor da classe especificando o código e a situação. O tipo de curso é
	 * avaliado de acordo com o código. A quantidade de reprovações é inicializada
	 * com zero.
	 *
	 * @param code         Código do curso.
	 * @param courseStatus Situação inicial do curso.
	 */
	public Disciplina(String codigo) {
		this.codigo = codigo;

	}

}
