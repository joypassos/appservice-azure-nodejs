variable "resource_group_name" {
  description = "Nome do grupo de recursos no Azure"
  type        = string
}

variable "app_service_name" {
  description = "Nome do Azure App Service"
  type        = string
}

variable "location" {
  description = "Região do Azure para provisionar recursos"
  type        = string
}
