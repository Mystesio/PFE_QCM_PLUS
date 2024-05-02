package com.PFE.QCM_PLUS.entity;

import java.util.Date;


import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Entity
@Getter
@Setter
public class Reponse {

	 private int id_response;
	 private String responses_stagiaire;
	 @Temporal(TemporalType.DATE)
	 private Date date_created;
	 @Temporal(TemporalType.DATE)
	 private Date date_modified;
	 
	    @ManyToOne
	    @JoinColumn(name = "stagiaire_id")
	    private Stagiare stagiaire;
	 
	 
	  @ManyToOne
	  @JoinColumn(name = "id_question")
	  @JsonIgnore // Add this annotation to ignore the circular reference
	  private Question question;
	    
	 
	
}
