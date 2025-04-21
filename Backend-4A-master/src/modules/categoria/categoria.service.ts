import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @Inject('CATEGORIA_REPOSITORY')
    private categoriaRepository: Repository<Categoria>) {}
  
  
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = new Categoria()
    categoria.nombre= createCategoriaDto.nombre
    categoria.detalle= createCategoriaDto.detalle
    return await this.categoriaRepository.save(categoria)

  }

  async findAll() {
    return await this.categoriaRepository.find({order:{id:'asc'}});
  }

 async findOne(id: number) {
  return await this.categoriaRepository.findOne({
    where:{
      id:id
    }
  });
    }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.categoriaRepository.update(id,updateCategoriaDto);
    }

  async remove(id: number) {
    return await this.categoriaRepository.delete(id);
  }
}
