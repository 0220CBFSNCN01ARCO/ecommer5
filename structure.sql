-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mercadolibro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mercadolibro
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mercadolibro` DEFAULT CHARACTER SET utf8 ;
USE `mercadolibro` ;

-- -----------------------------------------------------
-- Table `mercadolibro`.`autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibro`.`autor` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idLibro` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mercadolibro`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibro`.`categoria` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idLibro` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mercadolibro`.`libros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibro`.`libros` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `portada` VARCHAR(450) NOT NULL,
  `precio` INT(11) NOT NULL,
  `stock` INT(11) NOT NULL,
  `idCategoria` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idLibros_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_libros_categoria1_idx` (`idCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_libros_categoria1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `mercadolibro`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mercadolibro`.`libros_autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibro`.`libros_autores` (
  `idLibro` INT(11) NOT NULL,
  `idAutor` INT(11) NOT NULL,
  `id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_libros_has_autor_autor1_idx` (`idAutor` ASC) VISIBLE,
  INDEX `fk_libros_has_autor_libros_idx` (`idLibro` ASC) VISIBLE,
  CONSTRAINT `fk_libros_has_autor_autor1`
    FOREIGN KEY (`idAutor`)
    REFERENCES `mercadolibro`.`autor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_libros_has_autor_libros`
    FOREIGN KEY (`idLibro`)
    REFERENCES `mercadolibro`.`libros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mercadolibro`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercadolibro`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `cp` INT(11) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
