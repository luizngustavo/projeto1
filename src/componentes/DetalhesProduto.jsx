import React from 'react';
import { useParams } from 'react-router-dom';
import '../../src/style.css';

function DetalhesProduto({ addToCart }) {
  const { id } = useParams();

  // Array de produtos com suas informações
  const produtos = [
    {
      id: 1,
      name: 'Placa de Vídeo RTX 3060 Ti 1-Click OC Galax NVIDIA GeForce, 8GB, GDDR6, LHR, DLSS, Ray Tracing, Preto',
      price:2000,
      image:
        'https://images.kabum.com.br/produtos/fotos/404448/placa-de-video-rtx-3060-1-click-oc-pci-e-galax-8-gb-gddr6-128bit-36nsl8md6occ_1670960050_gg.jpg',
      description:
        'Placa de Vídeo Galax NVIDIA GeForce RTX 3060 Ti 1-Click OCEquipado com ventoinhas gêmeas de 90 mm e design prático especial para dissipação de calor, a textura e aparência de carbono exclusivas trazem o máximo de frescor da placa. Textura Carbono Exclusiva: O Melhor JogoPermite enfrentar os últimos jogos usando o poder da arquitetura RTX de 2ª geração da Ampere-NVIDIA. Obtenha desempenho incrível com núcleos Ray Tracing aprimorados, novos multiprocessadores de streaming e memória G6 de alta velocidade.Versão móvel para Xtreme Tuner Exclusivo para usuários de placas gráficas Galax, e a nova versão do sintonizador xtreme já está online!Aumento de desempenho alimentado por IAA renderização AI em Tensor Cores dedicados oferece um desempenho incrível, aumentando as taxas de quadros e fornecendo o espaço necessário para maximizar as configurações gráficas e a resolução até 8K',
    },
    {
      id: 2,
      name: 'FIGURE DEMON SLAYER: KIMETSU NO YAIBA - SANEMI SHINAZUGAWA',
      price: 1000,
      image: 'https://m.media-amazon.com/images/I/51nbTpVzS-L._AC_SL1200_.jpg',
      description: 'Descrição da figura do Demon Slayer',
    },
    {
      id: 3,
      name: 'CANECA DARTH VADER BUCK - STAR WARS',
      price: 1500,
      image:
        'https://images.tcdn.com.br/img/img_prod/723087/caneca_darth_vader_buck_star_wars_8699_2_17d52bd788fb9bae0ac8de746ab27aee.png',
      description: 'Descrição da caneca do Darth Vader',
    },
  ];

  // Busca o produto correspondente ao ID
  const produto = produtos.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(produto);
  };

  return (
    <div className="detalhes-produto-container">
      <h2>{produto.name}</h2>
      <img className="produto-image" src={produto.image} alt={produto.name} />
      <p className="produto-price">{produto.price}</p>
      <p className="produto-description">{produto.description}</p>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        COMPRAR
      </button>
    </div>
  );
}

export default DetalhesProduto;
