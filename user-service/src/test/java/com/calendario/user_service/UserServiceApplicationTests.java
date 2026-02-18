package com.calendario.user_service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import com.calendario.user_service.client.AuthServiceClient;
import com.calendario.user_service.repository.UserRepository;

@SpringBootTest(properties = {
	"spring.autoconfigure.exclude=org.springframework.boot.mongodb.autoconfigure.MongoAutoConfiguration,org.springframework.boot.data.mongodb.autoconfigure.DataMongoAutoConfiguration,org.springframework.boot.data.mongodb.autoconfigure.DataMongoRepositoriesAutoConfiguration",
	"spring.cloud.discovery.enabled=false",
	"eureka.client.enabled=false"
})
class UserServiceApplicationTests {

	@MockitoBean
	private UserRepository userRepository;

	@MockitoBean
	private AuthServiceClient authServiceClient;

	@Test
	void contextLoads() {
	}

}
