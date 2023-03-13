#!make

# ---------------------------------------
# functions

define generate_env_file
	$(shell if [ ! -e .env ] ; then cp .env.template .env; fi)
endef
define docker_run_target
    $(eval image_hash := $(shell docker build --target ${1} -q src/contoso-ui))
    docker run --rm "${image_hash}" ; docker image rm "${image_hash}"
endef

$(eval $(call generate_env_file))
include .env

# ---------------------------------------
# targets

.DEFAULT_GOAL := ${DEFAULT_GOAL}

# self documenting makefile, fetches lines marked with target description (2 '#'s)
help: ## Show this help message
	@grep -E '^[a-zA-Z _-]+: ?## .*$$' $(MAKEFILE_LIST) | \
		sed 's/##//g' | \
		awk -F ':' '{printf "%s \n %s\n\n", $$2, $$3}'

# ---------------------------------------

build: ## Build service image from source
	docker compose build

test: ## Test the service with docker
	docker compose run --rm test

# ---------------------------------------

local-push: ## Push image to local minikube
	minikube image load fast-food-ui:${UI_IMAGE_TAG}
	minikube image load fast-food-ui:latest

local-deploy: ## Deploy application to local minikube
	kubectl apply -f=k8s/ui-deployment.yaml

local-set-image: ## Set the image to the deployment container
    kubectl set image deployment/fast-food-ui fast-food-ui=fast-food-ui:${UI_IMAGE_TAG}

local-expose: ## Expose service endpoint accessible via port-forward
	kubectl port-forward --address 0.0.0.0 service/fast-food-ui 3000

local-delete: ## Delete application from local minikube
	kubectl delete -f=k8s/ui-deployment.yaml