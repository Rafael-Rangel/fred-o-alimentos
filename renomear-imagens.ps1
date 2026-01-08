# Script para renomear imagens de produtos
# Execute este script na raiz do projeto

$assetsPath = "src\assets"

# Verificar se a pasta existe
if (Test-Path $assetsPath) {
    Write-Host "Renomeando imagens de produtos..."
    
    # Renomear imagens
    if (Test-Path "$assetsPath\1.png") {
        Rename-Item "$assetsPath\1.png" "leite-de-coco.png" -Force
        Write-Host "✓ 1.png -> leite-de-coco.png"
    } else {
        Write-Host "✗ Arquivo 1.png não encontrado"
    }
    
    if (Test-Path "$assetsPath\2.png") {
        Rename-Item "$assetsPath\2.png" "coco-ralado.png" -Force
        Write-Host "✓ 2.png -> coco-ralado.png"
    } else {
        Write-Host "✗ Arquivo 2.png não encontrado"
    }
    
    if (Test-Path "$assetsPath\3.png") {
        Rename-Item "$assetsPath\3.png" "oleo-de-coco.png" -Force
        Write-Host "✓ 3.png -> oleo-de-coco.png"
    } else {
        Write-Host "✗ Arquivo 3.png não encontrado"
    }
    
    if (Test-Path "$assetsPath\4.png") {
        Rename-Item "$assetsPath\4.png" "manteiga-de-coco.png" -Force
        Write-Host "✓ 4.png -> manteiga-de-coco.png"
    } else {
        Write-Host "✗ Arquivo 4.png não encontrado"
    }
    
    if (Test-Path "$assetsPath\5.png") {
        Rename-Item "$assetsPath\5.png" "shoyu.png" -Force
        Write-Host "✓ 5.png -> shoyu.png"
    } else {
        Write-Host "✗ Arquivo 5.png não encontrado"
    }
    
    if (Test-Path "$assetsPath\6.png") {
        Rename-Item "$assetsPath\6.png" "palmito.png" -Force
        Write-Host "✓ 6.png -> palmito.png"
    } else {
        Write-Host "✗ Arquivo 6.png não encontrado"
    }
    
    Write-Host "`nRenomeação concluída!"
} else {
    Write-Host "Erro: Pasta $assetsPath não encontrada"
}


