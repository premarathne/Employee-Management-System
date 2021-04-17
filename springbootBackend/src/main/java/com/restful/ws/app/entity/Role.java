package com.restful.ws.app.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.restful.ws.app.model.ERole;

import lombok.Data;

@Entity
@Data
@Table(name="roles")
public class Role {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	@Size(max=20)
	@Column(length=20)
	private ERole name;
	
	@ManyToMany()
	private List<User>user;
	
	
	
	
}
