-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mercadolibrodb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mercadolibrodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mercadolibrodb` DEFAULT CHARACTER SET utf8mb4 ;
USE `mercadolibrodb` ;

-- -----------------------------------------------------
-- Table `mercadolibrodb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibrodb`.`Usuarios` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `cp` INT NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercadolibrodb`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibrodb`.`Categorias` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercadolibrodb`.`Libros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibrodb`.`Libros` (
  `idlibros` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `stock` INT NOT NULL,
  `portada` VARCHAR(450) NOT NULL,
  `descripcion` VARCHAR(450) NOT NULL,
  `autor` VARCHAR(45) NOT NULL,
  `idCategorias` INT NULL,
  PRIMARY KEY (`idlibros`),
  INDEX `fk_libros_categorias1_idx` (`idCategorias` ASC),
  CONSTRAINT `fk_libros_categorias1`
    FOREIGN KEY (`idCategorias`)
    REFERENCES `mercadolibrodb`.`Categorias` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
