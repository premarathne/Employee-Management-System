package com.restful.ws.app.controller;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import com.restful.ws.app.entity.Employee;
import com.restful.ws.app.exceptions.ResourceNotFoundException;
import com.restful.ws.app.repository.EmployeeRepository;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3002")
@RestController
@RequestMapping("/employee")
public class EmployeController {
	
	
	@Autowired
	private EmployeeRepository employeeRespository;
	
	//get all Employees
	@GetMapping("/findall")
	public List<Employee> getAllEmployees(){
		List<Employee> employee= employeeRespository.findAll();
		return employee;
	}
	
	//create an Employee
	@PostMapping("/create")
	public ResponseEntity<Employee>  insertEmployee( @RequestBody Employee employee)
	{
		Employee employeeSaved= employeeRespository.save(employee);
		return new ResponseEntity<Employee>(employeeSaved,HttpStatus.OK) ;
	}
	
	//get Employee by ID
	@GetMapping("/getbyId/{id}")
	public Employee findEmployeeById(@PathVariable int id) 
	{
		//if(true) throw new ResourceNotFoundException("No user can be found for the id of"+" "+id);
		Employee employee=employeeRespository.findById(id).get();
		
		
		return employee;
	
	}
	
	//update employee
	@PutMapping("/update")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) 
	{

		Employee updateEmployee=employeeRespository.save(employee);
		return ResponseEntity.ok(updateEmployee);
	}
	
	//delete Employee
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deletEmployee(@PathVariable int id) {
		Employee employee=employeeRespository.findById(id).get();
		employeeRespository.delete(employee);
		return ResponseEntity.noContent().build();
	}
	
    
	}
