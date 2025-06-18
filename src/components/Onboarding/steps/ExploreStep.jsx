const ExploreStep = () => {
  return (
    <div className="onboarding-step">
      <div className="onboarding-step-icon">🔍</div>
      
      <h3>Explore Nossos Recursos</h3>
      <p>
        A Digital Store oferece uma experiência completa de compras. 
        Conheça os principais recursos que tornarão suas compras mais fáceis e prazerosas.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gap: '16px', 
        marginTop: '24px',
        textAlign: 'left'
      }}>
        <div style={{ 
          background: '#f8fafc', 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#374151' }}>
            Navegação Intuitiva
          </h4>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
            Interface limpa e fácil de usar para encontrar rapidamente o que você procura.
          </p>
        </div>
        
        <div style={{ 
          background: '#f8fafc', 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛒</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#374151' }}>
            Carrinho Inteligente
          </h4>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
            Salve seus produtos favoritos e finalize suas compras quando quiser.
          </p>
        </div>
        
        <div style={{ 
          background: '#f8fafc', 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📦</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#374151' }}>
            Acompanhamento de Pedidos
          </h4>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
            Monitore seus pedidos em tempo real e receba atualizações sobre entregas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreStep;
