$ErrorActionPreference = "Stop"

$hostName = "clashjiedianlab.com"
$key = "332c5c76083c4205a44597c2a7dcda19"
$keyLocation = "https://$hostName/$key.txt"
$sitemapUrl = "https://$hostName/sitemap.xml"

Write-Host "Fetching sitemap from $sitemapUrl..."
$xmlContent = (Invoke-WebRequest -Uri $sitemapUrl -UseBasicParsing).Content
[xml]$xml = $xmlContent
$urls = @($xml.urlset.url.loc)

Write-Host "Found $($urls.Count) URLs to submit."

$payloadObj = @{
    host = $hostName
    key = $key
    keyLocation = $keyLocation
    urlList = $urls
}
$payloadJson = $payloadObj | ConvertTo-Json -Depth 5 -Compress

$endpoints = @(
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
)

foreach ($endpoint in $endpoints) {
    Write-Host "`nSubmitting to $endpoint..."
    try {
        $response = Invoke-WebRequest -Uri $endpoint -Method Post -ContentType "application/json; charset=utf-8" -Body ([System.Text.Encoding]::UTF8.GetBytes($payloadJson)) -UseBasicParsing
        Write-Host "[$endpoint] Status: $($response.StatusCode) $($response.StatusDescription)"
    } catch {
        if ($_.Exception.Response) {
            $statusCode = [int]$_.Exception.Response.StatusCode
            $statusDesc = $_.Exception.Response.StatusDescription
            Write-Host "[$endpoint] Response: $statusCode $statusDesc"
        } else {
            Write-Host "[$endpoint] Error: $($_.Exception.Message)"
        }
    }
}

Write-Host "`nIndexNow submission completed."
