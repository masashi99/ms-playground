package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()
	engine.Use(cors.New(
		cors.Config{
			AllowOrigins: []string{"http://localhost:3000"},
		},
	))
	engine.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	engine.Run(":8080")
}
