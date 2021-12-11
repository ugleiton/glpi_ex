# GLPI Extendido

GLPi é um sistema de código aberto para Gerenciamento de Ativos de TI, rastreamento de problemas e central de serviços. Este software é escrito em PHP e distribuído sob a GNU General Public License. Como uma tecnologia de código aberto, qualquer pessoa pode executar, modificar ou desenvolver o código.


## Modificações


Foram aproveitados status extendidos da classe CommonITILObject que estava disponíveis somente na classe **Change** (inc/change.class.php)

Esses status extras foram adicionados ao método *getAllStatusArray* da classe **Ticket** (inc/change.class.php)

Status adicionados:

    self::APPROVAL      => __('Approvalticket'),
    self::QUALIFICATION => __('Qualificationticket'),
    self::ACCEPTED      => _x('status', 'Acceptedticket'),

Modificações na tradução para o português (locales/pt_BR.mo):

    ASSIGNED      = 2; // Processing (assigned) -> Atribuído
    PLANNED       = 3; // Processing (planned)  -> Processando
    WAITING       = 4; // Pendingticket         -> Aguardando (usuário)
    ACCEPTED      = 7; // Acceptedticket        -> Cancelado
    APPROVAL      = 10;// Approvalticket        -> Aguardando (aprovação)
    QUALIFICATION = 12;// Qualificationticket   -> Aguardando (terceiro)

Alteração da tradução do campo Request Source:

    Request source        -> Causa da falha
    Request sources       -> Causas das falhas

Ajuste nos Causas das falhas (alteração precisa ser feita após a instalação do GLPI via Configurar->Listas Suspensas->Causas de falhas):

    Não houve falha
    Falha operacional
    Falha de sistema 
    Falha de rede
    Falha de hardware

## Validaões extras na tela de edição de chamados

### Arquivos utilizados para modificações

    js/customvalid.js
    inc/html.class.php