package com.restful.ws.app.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

import lombok.Data;

@Entity
@Data
@Table(name="user")
public class User {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@Size(max=20)
	@Column(name="username")
	private String username;
	
	@NotNull
	@Size(max=50)
	@Email
	@Column(name="email")
	private String  email;
	
	@NotNull
	@Size(max=120)
	@Column(name="password")
	private String password;
	
	@ManyToMany()
	private List<Role> role;
	
	
	
	
	
	
	
	
	
	
}
