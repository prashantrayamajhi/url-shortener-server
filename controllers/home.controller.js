const Url = require('./../models/url.model');
const validUrl = require('valid-url');
const nanoid = require('nanoid');

exports.getUrls = async (req,res,next) => {
    try{
        const urls = await Url.find();
        res.status(200).json({urls})
    }catch(err){
        res.status(400).send()
    }
}

exports.getUrl = async (req,res,next) => {
    const shortUrl = req.params.shortUrl
    try{
        const urlDetails = await Url.findOne({shortUrl})
        urlDetails.clicks++
        await urlDetails.save()
        res.redirect(urlDetails.longUrl)
    }catch(err){
        console.log(err)
        res.status(400).send()
    }
}

exports.postHome = async (req,res,next) => {
    let {url} = req.body;
    url = url.trim()
    const shortUrl = nanoid.nanoid(4);
    
    if(!validUrl.isUri(url)){
        return res.status(400).send({error:"Invalid url"})
    }
    try{
        const urlRegistered = await Url.findOne({longUrl:url})
        if(urlRegistered !== null){
            return res.status(200).json({url:urlRegistered})
        }
        const newUrl = new Url({
            longUrl : url,
            shortUrl
        })    
        await newUrl.save()
        res.status(201).json({newUrl})
    }catch(err){
        return res.status(400).send()
    }
}