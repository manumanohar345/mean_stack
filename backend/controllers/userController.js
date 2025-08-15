exports.getProfile = (req, res) => {
    return res.status(200).json({
        message: 'User profile fetched successfully',
        user: req.user
    });
};
